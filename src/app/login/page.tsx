import Link from 'next/link';
import Messages from './messages';

export default function Login() {
  return (
    <div className="relative w-full h-full flex-1 flex flex-col px-8 justify-center content-center items-center gap-2">
      <Link
        href="/"
        className="py-2 px-4 rounded-md no-underline text-foreground flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>

      <form
        className="flex-1 flex flex-col w-full md:w-1/3 justify-center gap-2 text-gray-100"
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="bg-tremor-brand rounded px-4 py-2 mb-2">
          Sign In
        </button>
        <button
          formAction="/auth/sign-up"
          className="border border-gray-500 rounded px-4 py-2 mb-2"
        >
          Sign Up
        </button>
        <Messages />
      </form>
    </div>
  );
}
