import { Link } from "react-router-dom";
const MainFooter = () => {
  const time = new Date();
  const year = time.getFullYear();

  return (
    <footer className="w-full  text-gray-200 bg-gray-900 shadow-sm shadow-gray-100 border-t border-gray-100/10">
      <div className="w-full max-w-[1280px] min-h-[100px] mx-auto p-4 flex flex-row justify-between items-center">
        <div className="footer-left">&copy; {year} Nam Truong</div>
        <div className="footer-right">
          <ul className="flex flex-row gap-4">
            <li>
              <Link to="https://x.com/namthedeveloper">Twitter</Link>
            </li>
            <li>
              <Link to="https://github.com/nam-td">Github</Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/@namthedeveloper">Youtube</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
