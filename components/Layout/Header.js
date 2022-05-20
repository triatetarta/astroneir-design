import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCursor } from "../Cursor/reducer";
import { MusicController } from "../Music";
import { emojiHappy, emojiSad } from "../../constants/data";
import { openBio } from "../Bio/reducer";
import { openContact } from "../Contact/reducer";

export const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <nav className='gl-container mx-auto flex items-start justify-between pt-10 text-white relative'>
      <div
        className='cursor-pointer'
        onClick={() => router.push("/")}
        onMouseEnter={() =>
          dispatch(
            setCursor({
              cursorContent: emojiHappy,
              cursorVariant: "smile",
            })
          )
        }
        onMouseLeave={() =>
          dispatch(
            setCursor({
              cursorContent: emojiSad,
              cursorVariant: "default",
            })
          )
        }
      >
        <h1 className='font-semibold'>Anestis Neiros</h1>
      </div>
      <div>
        <ul className='font-semibold'>
          <li
            onClick={() => dispatch(openBio())}
            onMouseEnter={() =>
              dispatch(
                setCursor({
                  cursorContent: emojiHappy,
                  cursorVariant: "smile",
                })
              )
            }
            onMouseLeave={() =>
              dispatch(
                setCursor({
                  cursorContent: emojiSad,
                  cursorVariant: "default",
                })
              )
            }
          >
            Bio
          </li>
          <li
            onClick={() => router.push("/works")}
            onMouseEnter={() =>
              dispatch(
                setCursor({
                  cursorContent: emojiHappy,
                  cursorVariant: "smile",
                })
              )
            }
            onMouseLeave={() =>
              dispatch(
                setCursor({
                  cursorContent: emojiSad,
                  cursorVariant: "default",
                })
              )
            }
          >
            Works
          </li>
          <li
            onClick={() => router.push("/music")}
            onMouseEnter={() =>
              dispatch(
                setCursor({
                  cursorContent: emojiHappy,
                  cursorVariant: "smile",
                })
              )
            }
            onMouseLeave={() =>
              dispatch(
                setCursor({
                  cursorContent: emojiSad,
                  cursorVariant: "default",
                })
              )
            }
          >
            Music
          </li>
          <li
            onClick={() => dispatch(openContact())}
            onMouseEnter={() =>
              dispatch(
                setCursor({
                  cursorContent: emojiHappy,
                  cursorVariant: "smile",
                })
              )
            }
            onMouseLeave={() =>
              dispatch(
                setCursor({
                  cursorContent: emojiSad,
                  cursorVariant: "default",
                })
              )
            }
          >
            Contact
          </li>
        </ul>
      </div>
      <div></div>
      <div>
        <MusicController />
      </div>
    </nav>
  );
};
