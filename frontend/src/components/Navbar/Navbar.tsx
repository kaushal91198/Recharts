import Button from "../Button/Button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex items-center justify-between h-14 bg-slate-200">
      <div className="text-slate-500 font-semibold px-3 text-4xl">
        DASH<span className="text-neutral-800 text-2xl font-bold">PAD</span>
      </div>
      <div className="border w-96 h-8 rounded-lg">
        <input
          className="w-96 h-full px-2 my-auto py-auto rounded-lg"
          placeholder="type here..."
          type="text"
        />
      </div>
      <div className="flex px-3">
        <Button title="Notification" />
        <Button title="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;
