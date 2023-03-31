import styles from './Home.module.css';
import headshot from './JoelHiltonHeadshot.jpg';

function Home(props: any) {
  return (
    <div className={styles.Home}>
      <h1 className={styles.h1}>Joel Hilton's Movie Site</h1>

      <div className={styles.imagecontainer}>
        <img src="./JoelHiltonHeadshot.jpg" />
        <div>
          <h2 className={styles.h2}>Welcome to my site!</h2>
          <p className={styles.hometext}>
            Joel Hilton is a movie lover who enjoys sharing his passion with
            others. This website is dedicated to his favorite movies, which you
            can explore by clicking on the "Movies" link above. In addition to
            his love of movies, Joel also hosts a podcast called Baconsale,
            which you can check out by clicking on the "Podcast" link above.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
