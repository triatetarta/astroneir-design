import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCursor } from "../Cursor/reducer";
import { MusicController } from "../Music";

export const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <nav className='container mx-auto flex items-start justify-between pt-10 text-white relative'>
      <div
        className='cursor-pointer'
        onClick={() => router.push("/")}
        onMouseEnter={() =>
          dispatch(setCursor({ cursorContent: "🙂", cursorVariant: "smile" }))
        }
        onMouseLeave={() =>
          dispatch(setCursor({ cursorContent: "🙁", cursorVariant: "default" }))
        }
      >
        <h1>Anestis Neiros</h1>
      </div>
      <div>
        <ul>
          <li>Bio</li>
          <li>Works</li>
          <li>Music</li>
          <li>Contact</li>
        </ul>
      </div>
      <div></div>
      <div>
        <MusicController />
      </div>
    </nav>
  );
};
