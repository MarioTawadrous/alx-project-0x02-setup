import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1>Header component</h1>
      <nav>
        <ul className="flex gap-1.5">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
