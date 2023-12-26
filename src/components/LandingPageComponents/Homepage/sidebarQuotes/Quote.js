import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import Quotation from "../Header/Quotation/Quotation";
import { QuotationContainer } from "../Header/Quotation/StyledQuotation";
import { VolumeContext } from "../Homepage";
import { QuoteContainer } from "./StyledQuote";
const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Quote = ({ value }) => {
  const [audio] = useState(
    new Audio(
      "https://hporx.com/wp-content/themes/astra-child/assets/images/audio.mp3"
    )
  );

  const handleVolume = useContext(VolumeContext);
  
  useEffect(() => {
    value ? audio.play() : audio.pause();
  }, [value]);

  const [playing, toggle] = useAudio(
    "https://hporx.com/wp-content/themes/astra-child/assets/images/audio.mp3"
  );

  const [newClass, setNewClass] = useState(false);
  const getValue = (value) => {
    setNewClass(value);
  };
  return (
    <>
      <>
        <div className="controles-button">
          <div
            className="controles-button-voice"
            onClick={() => {
              handleVolume(!value);
              // toggle();
            }}
          >
            {value ? (
              <img
                src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/29_Sound_alt-24.png"
                alt="voice"
              />
            ) : (
              <img
                src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/30_Sound_off-24.png"
                alt="voice"
              />
            )}
          </div>
          
        </div>
      </>
    </>
  );
};

export default Quote;
