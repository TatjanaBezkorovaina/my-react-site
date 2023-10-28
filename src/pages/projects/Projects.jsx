import React from "react";
import { useTranslation } from "react-i18next";
import "./projects.scss";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="projects">
        <div className="projects__wrapper">
          <ol>
            <li>
              {/* project 4 */}
              <div className="project">
                <div className="project__title">
                  <div className="project__title-href" target={"_blanc"}>
                    Organic Store <br /> {t("site_organic_store", "wordpress")}:
                  </div>
                </div>
                {
                  <div class="embed-container">
                    <iframe title="Organic Store" src="https://www.youtube.com/embed/amEg22DXxzg" frameborder="0" allowfullscreen></iframe>
                  </div>
                }
              </div>
            </li>
            <li>
              {/* project 1 */}
              <div className="project">
                <div className="project__title">
                  <a className="project__title-href" href="https://agency-webovio.vercel.app/index.html" target={"_blanc"}>
                    Webovio <br /> {t("site_creative_agency")}: <nobr>https://agency-webovio.vercel.app/</nobr>
                  </a>
                </div>
                <div class="embed-container">
                  <iframe title="Webovio" src="https://www.youtube.com/embed//AGFiOHCYMLI" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
            </li>
            <li>
              {/* project 2*/}
              <div className="project">
                <div className="project__title">
                  <a className="project__title-href" href="https://indoor-shop.vercel.app/" target={"_blanc"}>
                    Indoor <br /> {t("internet_store")}: <nobr>https://indoor-shop.vercel.app/</nobr>
                  </a>
                </div>
                <div class="embed-container">
                  <iframe title="Indoor" src="https://www.youtube.com/embed//O9UMnYLYXa0" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
            </li>
            <li>
              {/* project 3 */}
              <div className="project">
                <div className="project__title">
                  <a className="project__title-href" href="https://trafico-site.netlify.app/" target={"_blanc"}>
                    Trafico <br /> {t("site_about_transport_services")}: <nobr>https://trafico-site.netlify.app/</nobr>
                  </a>
                </div>
                <div class="embed-container">
                  <iframe title="Trafico" src="https://www.youtube.com/embed//rwt62XZrwGA" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
            </li>
            <li>
              <div className="project__play">
                <div className="project__title">
                  {t("java_script_game")} "{t("numbers")}" :
                </div>

                <a href="https://game-numbers.netlify.app/" target={"_blanc"}>
                  <h2 className="project__play-title">{t("let's_play")}!</h2>
                </a>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Projects;
