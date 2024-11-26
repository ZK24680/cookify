import { supabase, supabaseUrl } from "./supabase";

export async function loginApi({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function logoutApi() {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const { data: session, error } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error: error1 } = await supabase.auth.getUser();

  if (error1) {
    throw new Error(error1.message);
  }

  return data?.user;
}

export async function updateUser({ fullName, password, avatar }) {
  let updateData;

  if (password) updateData = { password };
  if (fullName)
    updateData = {
      data: {
        fullName,
      },
    };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error("There was an error updating User Info");

  if (!avatar) return data;

  // https://vjkcxbhvuldrbfdziwfv.supabase.co/storage/v1/object/public/avatars/arcane.jpg

  const fileName = `avatar-${data?.user?.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar, {
      upsert: false,
    });

  if (storageError) throw new Error(storageError.message);

  const { data: dataWithavatar, error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);

  return dataWithavatar;
}
