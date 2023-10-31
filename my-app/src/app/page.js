import Image from "next/image";
import styles from "./styles.module.css";
import { performRequest } from "lib/datocms";
import NavDark from "../app/components/NavDark";

import Link from "next/link";

const PAGE_CONTENT_QUERY = `
query MyQuery {
  allStekjes {
    aanmelddatum
    beschrijving
    giftig
    id
    imageStekje {
      url
    }
    landvanherkomst
    naam
    slug
    stekken
    temperatuur
    verpotten
    voeding
    watergeven
    zonlicht
  }
  }`;

export default async function Page() {
  const { data } = await performRequest({ query: PAGE_CONTENT_QUERY });
  console.log(data);
  return (
    <div>
      <NavDark />
      {/* <Header />
    <section>
      <img className={styles.img} src={data.stekje.imageStekje.url} alt="Description"/>
    </section> */}

      <section className={styles.carousel}>
        <div className={styles.overlay}>
          <div className={styles.wrapper}>
            <div className={styles.imagetext1}>
              <h1 className={styles.h1}>Swap nu je stek!</h1>
              <p>
                Heb jij een of meerdere plantenstekjes over en zou je die graag willen
                ruilen voor een nieuw plantje? Meld je stekje hier aan en ruil ‘m via de
                app. Schrijf de Latijnse naam van je plant en eventuele verzorgingstips op
                een labeltje en neem ‘m mee naar de OBA Linnaeusstraat in Amsterdam.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.slides}>
          <div className={styles.slidesitem} id="slide-1">
            <div className={styles.imagecontainer}>
              <img src={data.allStekjes[0].imageStekje.url} alt="foto van een stekje" />
              <div className={styles.imagetext1}>Welkom bij PlantSwap</div>
            </div>
          </div>

          <div className={styles.slidesitemslide2} id="slide-2">
            <div className={styles.imagecontainer2}>
              {/* <img src={data.headers[1].imagesCarousel.url} alt="foto van een stekje" /> */}
              <div className={styles.imagetext2}>Welkom bij PlantSwap</div>
            </div>
          </div>

          <div className={styles.slidesitem} id="slide-3">
            <div className={styles.imagecontainer3}>
              {/* <img src={data.headers[2].imagesCarousel.url} alt="foto van een stekje" /> */}
            </div>
            <div className={styles.imagetext3}>Welkom bij PlantSwap</div>
          </div>
        </div>
      </section>

      {/* <!-- SECTION 1 HOW IT WORKS --> */}
      <section className={styles.howitworks}>
        <div className={styles.flextitelhowitworks}>
          <svg
            width="23"
            height="25"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z"
              fill="#F26F21"
            />
          </svg>
          <h2 className={styles.h2}>Hoe werkt het?</h2>
        </div>
        <p>
          Bij Buurtcampus Oost kun je de stekjeskast bezoeken om stekjes te ruilen, je
          kunt ook op onze website inzien welke stekjes beschikbaar zijn. Dit is een
          geweldige manier voor plantenliefhebbers om met elkaar in contact te komen en
          planten te delen. Het maakt het gemakkelijk om je favoriete stekjes te vinden en
          te ruilen met anderen in de buurt, zonder gedoe. Kom langs bij Buurtcampus Oost
          en ontmoet mede-plantenliefhebbers!
        </p>
      </section>

      {/* <!-- SECTION 2 AVAILABLE STEKJES --> */}
      <section className={styles.availablestekjes}>
        <div className={styles.flextitelavailablestekjes}>
          <svg
            width="23"
            height="25"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z"
              fill="#F26F21"
            />
          </svg>
          <h3 className={styles.h3}>Beschikbare stekjes</h3>
        </div>
        <p>
          Dit zijn de meest recente stekjes die je kunt ruilen, en het enige wat je hoeft
          te doen is je eigen stekje meenemen.
        </p>

        <div className={styles.containerrecentstekjes}>
          <div className={styles.flexwrapperrecentstekje}>
            {/* {#each data.stekjes as stekje}
                <img src={stekje.fotos[0].url} alt="foto van een stekje" width="100"/>
            {/each} */}
          </div>
        </div>

        <div>
          <Link href="/all_stekjes">
            <button className={styles.buttonallstekjes}>
              Bekijk alle stekjes
              <svg
                className={styles.svgbutton}
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10.2317H20M20 10.2317L11.3333 0.99997M20 10.2317L11.3333 19"
                  stroke=""
                  stroke-width="1.5"
                />
              </svg>
            </button>
          </Link>
        </div>
      </section>

      {/* <!-- ABOUT BUURTCAMPUS OOST --> */}
      <section className={styles.abouthomepage}>
        <div className={styles.flextitleabout}>
          <svg
            width="23"
            height="25"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z"
              fill="#F26F21"
            />
          </svg>
          <h4 className={styles.h4}>Over PlantSwap</h4>
        </div>

        <p>
          De Buurtcampus-Oost heeft als doel Amsterdam-Oost duurzamer, inclusiever en
          gezonder te maken. PlantSwap Amsterdam zorgt ervoor dat plantenliefhebbers
          elkaar ontmoeten in de bibliotheek. Daarnaast hebben planten in huis een
          positief effect op je lichamelijke en geestelijke gezondheid. Veel mensen weten
          niet goed hoe ze voor planten moeten zorgen en kopen nieuwe als ze dood gaan. In
          het kader van duurzaamheid, gezondheid en meer sociale connectie, is PlantSwap
          Amsterdam een plek van sociale ontmoeting, waar mensen samen leren over planten.
        </p>

        {/* <div class="image-about">
        <img src={Netwerk}>
    </div> */}
      </section>
    </div>
  );
}
