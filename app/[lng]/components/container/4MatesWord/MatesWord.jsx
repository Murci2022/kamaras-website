import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./MatesWord.css";

const MatesWord = () => {
  return (
    <section className="app__bg app__wrapper section__padding">
      <div className="matesword-img_holder">
        <figure className="app__wrapper_img app__wrapper_img-reverse">
          <img
            src={images.matemask}
            alt="Mate Kamaras's portre with a carnival mask"
          />
        </figure>
      </div>

      <article className="app__wrapper_info">
        <SubHeading title="Mates Word" />

        <h1 className="h1__cormorant">What I Belive</h1>
        <div className="matesword-content">
          <div className="matesword-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans-grey">
              I consider myself fortunate to be able to work as a singer.
            </p>
          </div>

          <div className="matesword-card">
            <input type="checkbox" id="ch" />
            <div className="matesword_shortcontent">
              <p className="p__opensans-grey">
                From my early years, the stage has been my dream, and through
                hard work and dedication, I've brought to life various
                characters such as der Tod, Tony, Jean Valjean, Nick, and many
                more...
              </p>
            </div>

            <div className="matesword_longcontent">
              <p className="p__opensans-grey">
                From my early years, the stage has been my dream, and through
                hard work and dedication, I've brought to life various
                characters such as der Tod, Tony, Jean Valjean, Nick, and many
                more. My journey has taken me from Hungary to Vienna and then to
                Japan. <br />
                When I began my career, I never imagined singing in German,
                English, and even Japanese. Besides Hungary, Vienna, and Tokyo
                have become my second homes. Grateful for the opportunities my
                career has provided, I've learned that life is a mix of ups and
                downs, luck, and disasters. Every moment is special, and I
                strive to cherish each one. Each role I've undertaken is a
                testament to the dedication and passion I bring to my craft.
                Achieving success demands perseverance and an unwavering
                commitment to never give up on your dreams. That is what I
                believe.
              </p>
              <label htmlFor="ch">show less</label>
            </div>
            <label htmlFor="ch">read more</label>
          </div>

          <div className="matesword-sign">
            <img src={images.sign} alt="signiture of Mate" />
            <p className="p__opensans-grey">Mate Kamaras</p>
            <p className="p__opensans">Singer/actor</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default MatesWord;
