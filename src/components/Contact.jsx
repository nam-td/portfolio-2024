import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto my-12 flex flex-col justify-center items-center text-gray-300 text-lg">
      <div className="w-full max-w-[650px] flex flex-col p-8 gap-y-0">
        <p>Interested in working together?</p>
        <p>
          Drop me a line at{" "}
          <span className="text-blue-500">hello@namtruong.dev</span>
        </p>
        <p>
          Or follow me on{" "}
          <span className="font-bold">
            <Link to="https://x.com/namthedeveloper">Twitter</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
