import AccountSettings from "../accountSetting/AccountSettings";
import PageNav from "../components/PageNav";

function AccountDetails() {
  return (
    <div className="grid h-screen grid-rows-[5rem_1fr] overflow-scroll bg-[var(--background-color)]">
      <PageNav />
      <AccountSettings />
    </div>
  );
}

export default AccountDetails;
