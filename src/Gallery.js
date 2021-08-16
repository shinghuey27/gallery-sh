import styles from "./gallery.module.scss";
const Gallery = () => {
  return (
    <main>
      <section>
        <div className={styles.profile}>
          <img className={styles.profilePhoto} src="profilePhoto.png" alt="profilephoto"/>
          <div className={styles.profileName}>Rodney Cotton</div>
          <div className={styles.profileAddress}>Helsinki, Finland</div>
        </div>

        <div className={styles.profileStats}>
          <div className={styles.statItem}>
            <b className={styles.statFigures}>100</b>
            <div>Posts</div>
          </div>

          <div className={styles.statItem}>
            <b className={styles.statFigures}>2,242</b>
            <div>Follower</div>
          </div>

          <div className={styles.statItem}>
            <b className={styles.statFigures}>1,432</b>
            <div>Following</div>
          </div>
        </div>
      </section>

      <section>
          <div className={styles.grid}>
              <img src="photo1.png" alt="photo1" className={styles.img} />
              <img src="photo2.png" alt="photo2" className={styles.img2} />
              <img src="photo3.png" alt="photo3" className={styles.img3} />
              <img src="photo_4.png" alt="photo4" className={styles.img4} />
              <img src="photo5.png" alt="photo5" className={styles.img} />
              <img src="photo6.png" alt="photo6" className={styles.img} />

          </div>
      </section>

      <footer className={styles.footer}>
        created by <b className={styles.username}>shinghuey27</b> -
        devChallenges.io
      </footer>

    </main>
  );
};

export default Gallery;
