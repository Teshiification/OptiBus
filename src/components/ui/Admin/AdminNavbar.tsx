import { UserMenu } from '../UserMenu';

export const AdminNavbar = () => {
  return (
    <div className="m-4 flex h-14 items-center rounded-lg border border-accent px-4 py-2 shadow transition-all duration-500 ease-in-out hover:border-primary/30 hover:shadow hover:shadow-primary/30 dark:border-accent dark:hover:border-primary/30 dark:hover:shadow dark:hover:shadow-primary/30 md:ml-0">
      <div className="flex w-full items-center justify-between gap-4 align-middle">
        <div className="flex w-full items-center justify-end gap-4 align-middle md:ml-auto">
          <UserMenu />
        </div>
      </div>
    </div>
  );
};
