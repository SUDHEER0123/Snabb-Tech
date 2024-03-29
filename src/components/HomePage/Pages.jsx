import React from "react";
import pageImage from "../../assets/pageImage.png";
import backImage from "../../assets/backImage.png";
import { MissionData } from "../Constant";
import { MissionCard } from "./Card";
import world from "../../assets/Rectangle 111.png";
import star from "../../assets/star.svg";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import _one from "../../assets/_1.png";
import _two from "../../assets/_2.png";
import _three from "../../assets/_3.png";
import duck from "../../assets/alex-perri-At__EKm5PGE-unsplash.png";
import n from "../../assets/n.png";
import r from "../../assets/r.png";
import d from "../../assets/d.png";
import image7 from "../../assets/image 75.png";
import person from "../../assets/person.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import agri from "../../assets/agri.png";
import company from "../../assets/company.png";
const Page = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[#F5F1ED] pt-10">
      <div className="w-full flex flex-col gap-12 lg:px-10 px-5">
        <div className="w-full text-center lg:text-[65px] text-[20px] font-medium px-20">
          Nous réunissons experts du monde entier et organisations en Afrique
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between items-center gap-20 mt-5 lg:opacity-[0.19]">
          <div className="w-full lg:hidden">
            <div className="w-full h-full">
              <img
                src={backImage}
                alt="Background"
                className="w-full object-cover rounded-t-[450px]"
              />
            </div>
            <div className="w-full h-full pl-5">
              <img
                src={company}
                alt="Page"
                className="w-full object-cover rounded-t-[450px] -mt-[630px] left-32"
              />
            </div>
          </div>
          <div className="flex lg:flex-col flex-row gap-5 items-start">
            <div className="flex flex-col items-center lg:items-start gap-5">
              <p className="text-[#A95454] lg:text-[40px] text-[20px] font-medium">
                Organisations en Afrique
              </p>
              <p className="text-[#1F1F1F] lg:text-[15px] text-[13px] font-medium">
                Vous êtes une entreprise privée ou publique basée en Afrique et
                vous avez du mal à recruter des profils expérimentés? Vous êtes
                une start-up africaine et vous souhaitez faire appel aux
                services d'un prestataire externe? Vous recherchez une expertise
                spécifique pour réaliser un futur projet? Grâce à son réseau,
                PANDA vous aide à trouver les experts dont vous avez besoin!
              </p>
              <p className="text-[#1F1F1F] lg:text-[15px] text-[13px] font-medium">
                Grâce à son réseau, PANDA vous aide à trouver les experts dont
                vous avez besoin!
              </p>
            </div>

            <div className="lg:hidden gap-5">
              <p className="text-[#A95454] lg:text-[40px] text-[20px] font-medium">
                Experts
              </p>
              <p className="text-[#1F1F1F] lg:text-[15px] text-[13px] font-medium">
                Vous êtes un professionnel expérimenté et vous planifiez de
                partir travailler en Afrique? Vous vous rendez souvent sur le
                continent africain pour des raisons professionnelles et vous
                souhaitez étendre votre réseau? Vous souhaitez partager votre
                expertise avec des organisations africaines sans vous déplacer?
                PANDA est la plateforme de networking des experts pour la
                réalisation de leurs projets professionnels sur le continent
                africain!
              </p>
              <p className="text-[#1F1F1F] lg:text-[15px] text-[13px] font-medium">
                PANDA est la plateforme de networking des experts pour la
                réalisation de leurs projets professionnels sur le continent
                africain!
              </p>
            </div>
          </div>

          <div className="w-full max-sm:hidden lg:w-full">
            <div className="w-full h-full">
              <img
                src={backImage}
                alt="Background"
                className="w-full object-cover rounded-t-[450px]"
              />
            </div>
            <div className="w-full h-full pl-5">
              <img
                src={pageImage}
                alt="Page"
                className="w-full object-cover rounded-t-[450px] lg:-mt-[220px]"
              />
            </div>
          </div>

          <div className="max-sm:hidden">
            <div className="flex flex-col gap-5 items-center lg:items-start">
              <p className="text-[#A95454] lg:text-[40px] text-[20px] font-medium">
                Experts
              </p>
              <p className="text-[#1F1F1F] lg:text-[15px] text-[13px] font-medium">
                Vous êtes un professionnel expérimenté et vous planifiez de
                partir travailler en Afrique? Vous vous rendez souvent sur le
                continent africain pour des raisons professionnelles et vous
                souhaitez étendre votre réseau? Vous souhaitez partager votre
                expertise avec des organisations africaines sans vous déplacer?
                PANDA est la plateforme de networking des experts pour la
                réalisation de leurs projets professionnels sur le continent
                africain!
              </p>
              <p className="text-[#1F1F1F] lg:text-[15px] text-[13px] font-medium">
                PANDA est la plateforme de networking des experts pour la
                réalisation de leurs projets professionnels sur le continent
                africain!
              </p>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="flex flex-col justify-center items-start gap-10 mt-7">
          <p className="lg:text-[65px] text-[20px] text-left font-medium">
            Missions de PANDA
          </p>
          <div className="w-full flex flex-wrap items-center lg:gap-5 gap-10 lg:justify-center justify-start">
            {MissionData.map((ele, idx) => (
              <MissionCard
                id={ele.id}
                type={ele.type}
                details={ele.details}
                key={idx + "mission"}
              />
            ))}
          </div>
        </div>
        {/* 3rd */}

        <div className="flex flex-col gap-5 mt-7">
          <p className="lg:text-[65px] text-[20px] font-medium">
            Fonctionnalités
          </p>

          <div className="w-full flex lg:flex-row flex-col gap-12 justify-center items-start">
            <div className="lg:w-2/3 w-full flex items-start flex-wrap gap-12 px-10">
              <div className="flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="237"
                  height="76"
                  viewBox="0 0 237 76"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M148.657 1.81836H88.7113C44.8789 1.81836 8.53134 33.8651 1.82057 75.8066H0.807846C7.52824 33.3104 44.3253 0.818359 88.7113 0.818359H148.657C193.043 0.818359 229.84 33.3104 236.561 75.8066H235.548C228.837 33.8651 192.49 1.81836 148.657 1.81836Z"
                    fill="#A95454"
                  />
                </svg>
                <div className="w-[238px] h-[230px] flex flex-col gap-10 justify-between items-center pb-[20.174px] border-x border-b border-[#E0E0E0]">
                  <div className="w-[25px] h-[28px]">
                    <img className="w-11 h-11" src={star} alt="star" />
                  </div>
                  <p className="lg:text-[18px] text-xs font-medium text-center uppercase">
                    Sélection de profils
                  </p>
                  <p className="lg:text-[15px] text-[13px] font-normal self-stretch text-center">
                    Sélectionnez les meilleurs profils d'experts ou
                    organisations qui vous intéressent et entrez en contact avec
                    eux!{" "}
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="237"
                  height="76"
                  viewBox="0 0 237 76"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M148.657 1.81836H88.7113C44.8789 1.81836 8.53134 33.8651 1.82057 75.8066H0.807846C7.52824 33.3104 44.3253 0.818359 88.7113 0.818359H148.657C193.043 0.818359 229.84 33.3104 236.561 75.8066H235.548C228.837 33.8651 192.49 1.81836 148.657 1.81836Z"
                    fill="#A95454"
                  />
                </svg>
                <div className="w-[238px] h-[230px] flex flex-col gap-10 justify-between items-center pb-[20.174px] border-x border-b border-[#E0E0E0]">
                  <div className="w-[25px] h-[28px]">
                    <img className="w-11 h-11" src={star} alt="star" />
                  </div>
                  <p className="lg:text-[18px] text-xs  font-medium text-center uppercase">
                    Publication
                  </p>
                  <p className="lg:text-[15px] text-[13px] font-normal self-stretch text-center">
                    Offres d’emploi, annonces, collaborations, événements, etc.
                    Publiez du contenu exclusif sur votre page privée !
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="237"
                  height="76"
                  viewBox="0 0 237 76"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M148.657 1.81836H88.7113C44.8789 1.81836 8.53134 33.8651 1.82057 75.8066H0.807846C7.52824 33.3104 44.3253 0.818359 88.7113 0.818359H148.657C193.043 0.818359 229.84 33.3104 236.561 75.8066H235.548C228.837 33.8651 192.49 1.81836 148.657 1.81836Z"
                    fill="#A95454"
                  />
                </svg>
                <div className="w-[238px] h-[230px] flex flex-col gap-10 justify-between items-center pb-[20.174px] border-x border-b border-[#E0E0E0]">
                  <div className="w-[25px] h-[28px]">
                    <img className="w-11 h-11" src={star} alt="star" />
                  </div>
                  <p className="lg:text-[18px] text-xs  font-medium text-center uppercase">
                    tRAVEL MAP
                  </p>
                  <p className="lg:text-[15px] text-[13px] font-normal self-stretch text-center">
                    Rencontrez-vous grâce à notre Travel Map! Cette
                    fonctionnalité permet aux experts de notifier leurs
                    déplacements sur le continent africain. Il ne reste plus
                    qu'à planifier la rencontre!{" "}
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="w-[238px] h-[230px] flex flex-col gap-10 justify-between items-center pb-[20.174px] border-x border-t border-[#E0E0E0]">
                  <div className="w-[25px] h-[28px]">
                    <img className="w-11 h-11" src={star} alt="star" />
                  </div>
                  <p className="lg:text-[18px] text-xs  font-medium text-center uppercase">
                    Filtres & recherche avancée
                  </p>
                  <p className="lg:text-[15px] text-[13px] font-normal self-stretch text-center">
                    Ciblez vos recherches par secteur d'activité, pays et plus
                    encore.
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="239"
                  height="87"
                  viewBox="0 0 239 87"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M149.622 85.2554H89.769C42.3327 85.2554 3.66275 47.7223 1.83647 0.733444H0.835709C2.6626 48.2747 41.7803 86.2554 89.769 86.2554H149.622C197.611 86.2554 236.729 48.2747 238.556 0.733444H237.555C235.729 47.7223 197.059 85.2554 149.622 85.2554Z"
                    fill="#A95454"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="w-[238px] h-[230px] flex flex-col gap-10 justify-between items-center pb-[20.174px] border-x border-t border-[#E0E0E0]">
                  <div className="w-[25px] h-[28px]">
                    <img className="w-11 h-11" src={star} alt="star" />
                  </div>
                  <p className="lg:text-[18px] text-xs  font-medium text-center uppercase">
                    NOTIFICATIONS
                  </p>
                  <p className="lg:text-[15px] text-[13px] font-normal self-stretch text-center">
                    Soyez directement avertis des nouvelles publications et
                    mises à jour grâce aux notifications.
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="239"
                  height="87"
                  viewBox="0 0 239 87"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M149.622 85.2554H89.769C42.3327 85.2554 3.66275 47.7223 1.83647 0.733444H0.835709C2.6626 48.2747 41.7803 86.2554 89.769 86.2554H149.622C197.611 86.2554 236.729 48.2747 238.556 0.733444H237.555C235.729 47.7223 197.059 85.2554 149.622 85.2554Z"
                    fill="#A95454"
                  />
                </svg>
              </div>
            </div>
            <div className="lg:w-1/3 w-full flex flex-col gap-10">
              <img src={world} alt="world" />
              <button className=" px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
                Explorer la Travel Map
              </button>
            </div>
          </div>
        </div>

        {/* 4th */}

        <div className="flex justify-between items-start lg:flex-row flex-col gap-6 mt-7">
          <div className="lg:w-1/3 w-full lg:h-screen flex flex-col justify-between items-center">
            <div className="flex flex-col gap-5 max-sm:hidden">
              <div className="w-full flex justify-center items-center gap-5 lg:px-10">
                <div className="h-2 w-[96px] bg-[#E0E0E0]">
                  <div className="h-2 w-[48px] bg-[#1F1F1F]"></div>
                </div>
                <div className="h-2 w-[96px] bg-[#E0E0E0]"></div>
                <div className="h-2 w-[96px] bg-[#E0E0E0]"></div>
              </div>

              <p className="lg:text-[65px] text-[20px] font-medium text-center">
                Découvrez les experts
              </p>
            </div>

            <div className="flex flex-col gap-8 max-sm:hidden">
              <p className="lg:text-[15px] text-[13px] font-normal">
                Connectez-vous avec des organisations africaines, postulez au
                job de vos rêves en Afrique ou partagez votre expertise même à
                distance!{" "}
              </p>
              <button className=" px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
                Voir tout
              </button>
            </div>
            <div className="lg:hidden w-full flex flex-col justify-start items-start gap-10">
              <p className="lg:text-[65px] text-[20px] font-medium text-center">
                Découvrez les experts
              </p>
              <p className="lg:text-[15px] text-[13px] font-normal">
                Connectez-vous avec des organisations africaines, postulez au
                job de vos rêves en Afrique ou partagez votre expertise même à
                distance!{" "}
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="5"
                viewBox="0 0 160 5"
                fill="none"
              >
                <line
                  x1="2"
                  y1="2.23535"
                  x2="47.843"
                  y2="2.23536"
                  stroke="#E0E0E0"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <line
                  x1="2"
                  y1="2.23535"
                  x2="18.1048"
                  y2="2.23535"
                  stroke="#1F1F1F"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <line
                  x1="2"
                  y1="2.23535"
                  x2="18.1048"
                  y2="2.23535"
                  stroke="#1F1F1F"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <line
                  x1="56.8691"
                  y1="2.23535"
                  x2="102.712"
                  y2="2.23535"
                  stroke="#E0E0E0"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <line
                  x1="112.157"
                  y1="2.23535"
                  x2="158"
                  y2="2.23535"
                  stroke="#E0E0E0"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="w-full flex flex-col gap-10 lg:justify-between justify-center">
            <div className="flex flex-col ">
              <p className="lg:text-[40px] text-[15px] font-medium">
                “ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une
                offre d'emploi pour le poste de web developer publiée sur PANDA
                et le mois suivant je commençais à travailler à Dakar! ”
              </p>
              <p className="text-right lg:text-[13px] text-[10px] font-bold uppercase text-[#A95454]">
                Omar Ndiaye
              </p>
            </div>

            <div className="flex lg:justify-evenly items-baseline lg:flex-wrap">
              <img src={one} className="rounded-t-[200px]" alt="one person" />

              <img src={two} className="rounded-t-[200px]" alt="person" />

              <img src={three} className="rounded-t-[200px]" alt="perosn2" />
            </div>
            <button className="w-[235px] mx-auto lg:hidden px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
              Voir tout
            </button>
          </div>
        </div>
        {/* 5th */}

        <div className="flex lg:flex-row flex-col gap-6 mt-7">
          <div className="lg:hidden flex flex-col gap-10">
            <p className="lg:text-[65px] text-[20px] font-medium text-left">
              Découvrez les organisations en Afrique
            </p>

            <p className="lg:text-[15px] text-[13px] font-normal">
              Trouvez les experts que vous recherchez, publiez vos offres
              d'emploi et d'autres contenus exclusifs sur votre organisation!
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="225"
              height="5"
              viewBox="0 0 225 5"
              fill="none"
            >
              <line
                x1="2.78027"
                y1="2.93652"
                x2="68.5605"
                y2="2.93652"
                stroke="#E0E0E0"
                stroke-width="4"
                stroke-linecap="round"
              />
              <line
                x1="2.78027"
                y1="2.93652"
                x2="26.9269"
                y2="2.93652"
                stroke="#1F1F1F"
                stroke-width="4"
                stroke-linecap="round"
              />
              <line
                x1="2.78027"
                y1="2.93652"
                x2="26.9269"
                y2="2.93652"
                stroke="#1F1F1F"
                stroke-width="4"
                stroke-linecap="round"
              />
              <line
                x1="79.5967"
                y1="2.93652"
                x2="145.377"
                y2="2.93652"
                stroke="#E0E0E0"
                stroke-width="4"
                stroke-linecap="round"
              />
              <line
                x1="157"
                y1="2.93652"
                x2="222.78"
                y2="2.93652"
                stroke="#E0E0E0"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
            <div className="flex flex-col ">
              <p className="lg:text-[40px] text-[15px] font-medium">
                “PANDA nous donne accès aux meilleurs talents dans leur domaine
                d'activité et à de réelles perspectives de collaboration! ”
              </p>
              <p className="text-right lg:text-[13px] text-[10px] font-bold uppercase text-[#A95454]">
                LGB Company
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 justify-between">
            <div className="flex flex-col max-sm:hidden ">
              <p className="lg:text-[40px] text-[15px] font-medium">
                “PANDA nous donne accès aux meilleurs talents dans leur domaine
                d'activité et à de réelles perspectives de collaboration! ”
              </p>
              <p className="text-left lg:text-[13px] text-[10px] font-bold uppercase text-[#A95454]">
                LGB Company
              </p>
            </div>

            <div className="flex lg:justify-evenly items-baseline lg:flex-wrap">
              <img src={_one} className="rounded-t-[200px]" alt="perosn" />

              <img src={_two} className="rounded-t-[200px]" alt="perosn" />
              <img src={_three} className="rounded-t-[200px]" alt="person" />
            </div>
            <button className="w-[235px] mx-auto lg:hidden px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
              Voir tout
            </button>
          </div>
          <div className="w-1/3 flex flex-col justify-around items-baseline gap-8">
            <div className="w-full flex justify-center items-center gap-5 px-10 max-sm:hidden">
              <div className="h-2 w-[96px] bg-[#E0E0E0]">
                <div className="h-2 w-[48px] bg-[#1F1F1F]"></div>
              </div>
              <div className="h-2 w-[96px] bg-[#E0E0E0]"></div>
              <div className="h-2 w-[96px] bg-[#E0E0E0]"></div>
            </div>
            <p className="lg:text-[65px] text-[20px] font-medium text-center max-sm:hidden">
              Découvrez les organisations en Afrique
            </p>

            <div className="flex flex-col gap-8">
              <p className="lg:text-[15px] text-[13px] font-normal max-sm:hidden">
                Trouvez les experts que vous recherchez, publiez vos offres
                d'emploi et d'autres contenus exclusifs sur votre organisation!
              </p>
              <button className="max-sm:hidden px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
                Voir tout
              </button>
            </div>
          </div>
        </div>

        {/* 7th */}

        <div className="w-full flex lg:flex-row flex-col justify-between lg:gap-10 mt-7">
          <div className="lg:w-1/3 w-full flex flex-col gap-10 justify-between lg:h-screen">
            <p className="lg:text-[65px] text-[20px] font-medium text-start">
              Offres d'emploi
            </p>
            <div className="flex flex-col gap-10">
              <p className="lg:text-[15px] text-[13px] font-normal">
                Publiez les offres d'emploi au sein de votre organisation auprès
                de notre communauté d'experts! Expert à la recherche d'un emploi
                en Afrique? Trouvez le job de vos rêves!
              </p>
              <button className="max-sm:hidden px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
                Publier ou postuler à une offre d'emploi
              </button>
            </div>
          </div>
          <div className="lg:w-2/3 w-full lg:flex flex-wrap lg:justify-around grid grid-cols-2 gap-5">
            <div className="h-[352px] lg:w-[398px] border border-[#E0E0E0] rounded-[112px] flex flex-col justify-evenly">
              <div className="flex flex-col justify-center items-center gap-2 pt-10 px-3">
                <p className="lg:text-[30px] text-[13px] font-semibold">
                  Lead Software Engineer
                </p>
                <p className="text-[#A95454] lg:text-[15px] text-[10px] font-normal">
                  Madagascar
                </p>
              </div>
              <div className="flex justify-evenly items-center">
                <div className="flex flex-col gap-1">
                  <p className="lg:text-[15px] text-[10px] font-medium text-[#A95454]">
                    Full-time
                  </p>
                  <p className="lg:text-[15px] text-[10px] font-medium underline">
                    + Favorites
                  </p>
                </div>
                <div className="lg:flex flex-col hidden gap-4">
                  <img
                    src={duck}
                    className="w-[78px] h-[76px] rounded-[40px]"
                    alt="duck"
                  />
                  <p className="text-[13px] font-bold">Tubik Studio</p>
                </div>
                <div className="lg:hidden"></div>
                <div>
                  <p className="lg:text-[15px] text-[10px] font-normal">
                    1 day ago
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button className="px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
                  Voir
                </button>
              </div>
            </div>

            <div className="h-[352px] lg:w-[398px] border border-[#E0E0E0] rounded-[112px] flex flex-col justify-evenly">
              <div className="flex flex-col justify-center items-center gap-2 pt-10 px-3">
                <p className="lg:text-[30px] text-[13px] font-semibold">
                  Risk Analyst
                </p>
                <p className="text-[#A95454] lg:text-[15px] text-[10px] font-normal">
                  Madagascar
                </p>
              </div>
              <div className="flex justify-evenly items-center">
                <div className="flex flex-col gap-1">
                  <p className="lg:text-[15px] text-[10px] font-medium text-[#A95454]">
                    Full-time
                  </p>
                  <p className="lg:text-[15px] text-[10px] font-medium underline">
                    + Favorites
                  </p>
                </div>
                <div className="lg:flex flex-col hidden gap-4">
                  <img
                    src={r}
                    className="w-[78px] h-[76px] rounded-[40px]"
                    alt="duck"
                  />
                  <p className="text-[13px] font-bold">Bubba Gump</p>
                </div>
                <div className="lg:hidden"></div>
                <div>
                  <p className="lg:text-[15px] text-[10px] font-normal">
                    1 day ago
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button className="px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
                  Voir
                </button>
              </div>
            </div>

            <div className="h-[352px] lg:w-[398px] border border-[#E0E0E0] rounded-[112px] flex flex-col justify-evenly">
              <div className="flex flex-col justify-center items-center gap-2 pt-10 px-3">
                <p className="lg:text-[30px] text-[13px] font-semibold">
                  Financial Analyst
                </p>
                <p className="text-[#A95454] lg:text-[15px] text-[10px] font-normal">
                  Madagascar
                </p>
              </div>
              <div className="flex justify-evenly items-center">
                <div className="flex flex-col gap-1">
                  <p className="lg:text-[15px] text-[10px] font-medium text-[#A95454]">
                    Full-time
                  </p>
                  <p className="lg:text-[15px] text-[10px] font-medium underline">
                    + Favorites
                  </p>
                </div>
                <div className="lg:flex flex-col hidden gap-4">
                  <img
                    src={n}
                    className="w-[78px] h-[76px] rounded-[40px]"
                    alt="duck"
                  />
                  <p className="text-[13px] font-bold">SP-holding</p>
                </div>
                <div className="lg:hidden"></div>
                <div>
                  <p className="lg:text-[15px] text-[10px] font-normal">
                    1 day ago
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button className="px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
                  Voir
                </button>
              </div>
            </div>

            <div className="h-[352px] lg:w-[398px] border border-[#E0E0E0] rounded-[112px] flex flex-col justify-evenly">
              <div className="flex flex-col justify-center items-center gap-2 pt-10 px-3">
                <p className="lg:text-[30px] text-[13px] font-semibold">
                  Data Engineer
                </p>
                <p className="text-[#A95454] lg:text-[15px] text-[10px] font-normal">
                  Madagascar
                </p>
              </div>
              <div className="flex justify-evenly items-center">
                <div className="flex flex-col gap-1">
                  <p className="lg:text-[15px] text-[10px] font-medium text-[#A95454]">
                    Full-time
                  </p>
                  <p className="lg:text-[15px] text-[10px] font-medium underline">
                    + Favorites
                  </p>
                </div>
                <div className="lg:flex flex-col hidden gap-4 justify-center items-center">
                  <img
                    src={d}
                    className="w-[78px] h-[76px] rounded-[40px]"
                    alt="duck"
                  />
                  <p className="text-[13px] font-bold shrink-0">
                    Vehement Capital Partners
                  </p>
                </div>
                <div className="lg:hidden"></div>
                <div>
                  <p className="lg:text-[15px] text-[10px] font-normal">
                    1 day ago
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button className="px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
                  Voir
                </button>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex justify-center">
            <button className=" px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
              Publier ou postuler à une offre d'emploi
            </button>
          </div>
        </div>

        {/* 8th */}

        <div className="flex gap-10 lg:flex-row flex-col items-start mt-7 w-full">
          <div className="flex flex-row gap-3">
            <div className="w-1/3 flex flex-col lg:gap-5 lg:justify-start gap-20 item-center">
              <div className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="160"
                  height="4"
                  viewBox="0 0 160 4"
                  fill="none"
                >
                  <line
                    x1="2.13281"
                    y1="2"
                    x2="47.7414"
                    y2="2"
                    stroke="#E0E0E0"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <line
                    x1="2.13281"
                    y1="2"
                    x2="18.143"
                    y2="2"
                    stroke="#1F1F1F"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <line
                    x1="2.13281"
                    y1="2"
                    x2="18.143"
                    y2="2"
                    stroke="#1F1F1F"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <line
                    x1="56.7432"
                    y1="2"
                    x2="102.352"
                    y2="1.99999"
                    stroke="#E0E0E0"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <line
                    x1="111.771"
                    y1="2"
                    x2="157.38"
                    y2="1.99999"
                    stroke="#E0E0E0"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="w-full flex justify-center items-center gap-5 px-10 max-sm:hidden">
                <div className="h-2 w-[96px] bg-[#E0E0E0]">
                  <div className="h-2 w-[48px] bg-[#1F1F1F]"></div>
                </div>
                <div className="h-2 w-[96px] bg-[#E0E0E0]"></div>
                <div className="h-2 w-[96px] bg-[#E0E0E0]"></div>
              </div>
              <p className="lg:text-[65px] text-[20px] font-medium">
                Evénements à venir
              </p>
              <div className="flex flex-col justify-center items-start gap-5">
                <p className="lg:text-[13px] text-[10px] font-bold">
                  Publié par: Pablo Diahuno
                </p>
                <img src={person} alt="person" className="rounded-[50%]" />
              </div>

              <p className="lg:text-[15px] text-[13px] font-normal">
                Sortez votre carnet d'adresses! Restez informés de tous les
                événements à venir autour du business en Afrique organisés en
                Afrique ou à l'étranger.
              </p>
              <button className="max-sm:hidden px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
                Publier ou voir les événements
              </button>
            </div>

            <div className="lg:w-2/3 flex lg:items-start lg:flex-row flex-col gap-10">
              <img src={image7} alt="pic" className="rounded-[50%]" />

              <div className="lg:w-1/3 w-full flex flex-col justify-center items-baseline gap-4 ">
                <div className="flex">
                  <span className="text-[13px] text-[#1F1F1F] font-bold">
                    L'événement:
                  </span>
                  <span className="text-[13px] text-[#A95454] font-bold">
                    {" "}
                    The Nancy party’s{" "}
                  </span>
                </div>

                <div className="flex">
                  <span className="lg:text-[13px] text-[10px] text-[#1F1F1F] font-bold">
                    Date:
                  </span>
                  <span className="lg:text-[13px] text-[10px] text-[#A95454] font-bold">
                    10/07/22
                  </span>
                </div>

                <div className="flex">
                  <span className="lg:text-[13px] text-[10px] text-[#1F1F1F] font-bold">
                    Lieu:{" "}
                  </span>
                  <span className="lg:text-[13px] text-[10px] text-[#A95454] font-bold">
                    Senegal
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex justify-center w-full">
            <button className=" px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
              Publier ou voir les événements
            </button>
          </div>
        </div>
        {/* 9th */}

        <div className="flex gap-10 lg:flex-row justify-between items-start mt-7 w-full">
          <div className="lg:w-1/3 flex flex-col justify-center items-baseline gap-8 ">
            <div className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="5"
                viewBox="0 0 160 5"
                fill="none"
              >
                <line
                  x1="2"
                  y1="2.16895"
                  x2="47.843"
                  y2="2.16895"
                  stroke="#E0E0E0"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <line
                  x1="2"
                  y1="2.16895"
                  x2="18.1047"
                  y2="2.16895"
                  stroke="#1F1F1F"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <line
                  x1="2"
                  y1="2.16895"
                  x2="18.1047"
                  y2="2.16895"
                  stroke="#1F1F1F"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <line
                  x1="56.8691"
                  y1="2.16895"
                  x2="102.712"
                  y2="2.16894"
                  stroke="#E0E0E0"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <line
                  x1="112.157"
                  y1="2.16895"
                  x2="158"
                  y2="2.16894"
                  stroke="#E0E0E0"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p className="lg:text-[65px] text-[20px] font-medium uppercase">
              Témoignages
            </p>
            <div className="flex flex-col lg:gap-4 gap-10">
              <div className="flex flex-col justify-start gap-2">
                <span className="lg:text-[13px] text-[10px] text-[#1F1F1F] font-bold">
                  Diaspora Member:
                </span>
                <span className="lg:text-[13px] text-[10px] text-[#A95454] font-bold">
                  Artur Luison
                </span>
              </div>

              <div className="flex flex-col justify-start gap-2">
                <span className="lg:text-[13px] text-[10px] text-[#1F1F1F] font-bold">
                  Job Position:
                </span>
                <span className="lg:text-[13px] text-[10px] text-[#A95454] font-bold">
                  {" "}
                  Manager
                </span>
              </div>
            </div>
            <p className="lg:text-[15px] text-[13px] font-medium max-sm:hidden">
              “ Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
              volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
              Ut pulvinar orci. “
            </p>
            <div className="lg:hidden">
              <pre> </pre>
            </div>
          </div>

          <div className="lg:w-1/3 ">
            <img src={person2} alt="pic" className="w-full rounded-[50%]" />
          </div>

          <div className="w-1/3 flex flex-col gap-12 justify-between item-center max-sm:hidden">
            <div className="w-full flex justify-center items-center gap-5 px-10">
              <div className="h-2 w-[96px] bg-[#E0E0E0]">
                <div className="h-2 w-[48px] bg-[#1F1F1F]"></div>
              </div>
              <div className="h-2 w-[96px] bg-[#E0E0E0]"></div>
              <div className="h-2 w-[96px] bg-[#E0E0E0]"></div>
            </div>
            <div className="flex flex-col justify-between gap-12">
              <p className="text-[15px] font-bold">
                Very Nice Atmosphere and experience with “Welcome to PANDA”
              </p>
              <p className="lg:text-[15px] text-[13px] font-normal">
                Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
                volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
                Ut pulvinar orci.
              </p>

              <p className="lg:text-[15px] text-[13px] font-normal">
                Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
                volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
                Ut pulvinar orci.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-col gap-10">
          <div className="w-full px-5">
            <p className="lg:text-[15px] text-[13px] font-medium">
              “ Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
              volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
              Ut pulvinar orci. “
            </p>
            <div className="flex flex-col justify-between gap-12">
              <p className="text-[15px] font-bold">
                Very Nice Atmosphere and experience with “Welcome to PANDA”
              </p>
              <p className="lg:text-[15px] text-[13px] font-normal">
                Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
                volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
                Ut pulvinar orci.
              </p>

              <p className="lg:text-[15px] text-[13px] font-normal">
                Risus, sed venenatis sed morbi lectus nunc tincidunt quam. Eget
                volutpat elementum cum turpis feugiat imperdiet auctor accumsan.
                Ut pulvinar orci.
              </p>
            </div>
          </div>
        </div>

        {/* 10th */}
        <div className="flex flex-col gap-6 mt-7">
          <p className="lg:text-[65px] text-[20px] font-medium">
            Les fondateurs
          </p>
          <div className="w-full flex lg:justify-between lg:items-start items-center lg:flex-nowrap flex-wrap">
            <div className="flex justify-around gap-5">
              <div className="flex flex-col gap-2">
                <img src={person3} alt="perosn" className="rounded-t-[200px]" />
                <div className="flex flex-col justify-start gap-2">
                  <span className="lg:text-[13px] text-[10px] text-[#1F1F1F] font-bold">
                    Co-fondateur PANDA:
                  </span>
                  <span className="lg:text-[13px] text-[10px] text-[#A95454] font-bold">
                    Sarah Walu Onya
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img src={person4} alt="perosn" className="rounded-t-[200px]" />
                <div className="flex flex-col justify-start gap-2">
                  <span className="lg:text-[13px] text-[10px] text-[#1F1F1F] font-bold">
                    Co-fondateur PANDA:
                  </span>
                  <span className="lg:text-[13px] text-[10px] text-[#A95454] font-bold">
                    Abdoulaye Ba
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 w-1/2 flex flex-col lg:gap-7 border border-[#CECBC8] rounded-t-[163px]">
              <div className="p-8 mt-10 lg:text-[15px] text-[13px] font-normal">
                “ <span className="text-[#A95454]">Sarah</span> et
                <span className="text-[#A95454]"> Abdoulaye </span> sont tous
                deux consultants et managers dans un groupe international de
                conseil en stratégie et management. Ils se sont rencontrés au
                Luxembourg et ont beaucoup échangé sur leur expérience commune
                dans l'entrepreneuriat. Tout au long de leurs discussions, une
                chose très claire est vite apparue : leur passion pour
                l'entrepreneuriat et leur amour de l'Afrique, le continent dont
                ils sont tous deux originaires. “
              </div>
              <div className="p-8">
                Ils sont alors convaincus qu'ils peuvent répondre à un besoin
                critique en Afrique et avoir un réel impact en réunissant des
                experts de premier plan du monde entier pour collaborer avec des
                acteurs africains sur des projets visant à faire croître
                l'écosystème de l'innovation en{" "}
                <span className="text-[#A95454]">Afrique.</span>
              </div>
            </div>

            <div className="lg:w-1/3 w-1/2 lg:hidden  flex flex-col lg:gap-7 border border-[#CECBC8] rounded-t-[163px]">
              <div className="p-8 mt-10 lg:text-[15px] text-[13px] font-normal">
                “ <span className="text-[#A95454]">Sarah</span> et
                <span className="text-[#A95454]"> Abdoulaye </span> sont tous
                deux consultants et managers dans un groupe international de
                conseil en stratégie et management. Ils se sont rencontrés au
                Luxembourg et ont beaucoup échangé sur leur expérience commune
                dans l'entrepreneuriat. Tout au long de leurs discussions, une
                chose très claire est vite apparue : leur passion pour
                l'entrepreneuriat et leur amour de l'Afrique, le continent dont
                ils sont tous deux originaires. “
              </div>
              <div className="p-8">
                Ils sont alors convaincus qu'ils peuvent répondre à un besoin
                critique en Afrique et avoir un réel impact en réunissant des
                experts de premier plan du monde entier pour collaborer avec des
                acteurs africains sur des projets visant à faire croître
                l'écosystème de l'innovation en{" "}
                <span className="text-[#A95454]">Afrique.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 11th */}

        <div className="mt-7 max-sm:hidden ">
          <div className="w-full flex flex-col justify-center items-center px-12">
            <div className="lg:text-[40px] text-[15px] font-medium leading-[54px] text-justify">
              “ Notre objectif est de capturer et partager les connaissances,
              les expertises et les réseaux afin de créer des opportunités
              illimitées, que ce soit pour les acteurs africains à la recherche
              des meilleures talents pour développer leurs activités ou pour les
              experts du monde entier qui souhaitent lancer des projets
              innovants en Afrique. “
            </div>
            <div className="text-[#A95454] lg:text-[13px] text-[10px] font-bold lg:text-right text-center w-full">
              Sarah et Abdoulaye
            </div>
          </div>
        </div>

        {/* 12 */}
        <div className="mt-7 w-full flex flex-col gap-5">
          <p className="lg:text-[65px] text-[20px] font-medium">
            Top 5 des domaines d’activités porteurs en Afrique{" "}
          </p>
          <div className="w-full flex lg:justify-between justify-around items-center">
            <div className="w-1/2">
              <img src={agri} alt="pic" className=" rounded-[50%]" />
            </div>

            <div className="w-1/2 flex flex-col justify-center items-center gap-10">
              <div className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="135"
                  height="5"
                  viewBox="0 0 135 5"
                  fill="none"
                >
                  <line
                    x1="2"
                    y1="-2"
                    x2="21.5629"
                    y2="-2"
                    transform="matrix(1 -2.05799e-05 -8.74451e-08 1 0.167969 3.99658)"
                    stroke="#E0E0E0"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <line
                    x1="2"
                    y1="-2"
                    x2="21.5629"
                    y2="-2"
                    transform="matrix(1 -1.94144e-05 -8.74465e-08 1 27.9854 3.99658)"
                    stroke="#E0E0E0"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <line
                    x1="2"
                    y1="-2"
                    x2="21.5629"
                    y2="-2"
                    transform="matrix(1 4.49287e-05 -8.75932e-08 1 55.8027 3.99658)"
                    stroke="#E0E0E0"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <line
                    x1="2"
                    y1="-2"
                    x2="21.5629"
                    y2="-2"
                    transform="matrix(1 4.49287e-05 -8.75932e-08 1 83.6201 3.99634)"
                    stroke="#E0E0E0"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <line
                    x1="2"
                    y1="-2"
                    x2="21.5629"
                    y2="-2"
                    transform="matrix(1 4.49287e-05 -8.75932e-08 1 111.438 3.99634)"
                    stroke="#E0E0E0"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <line
                    x1="2"
                    y1="-2"
                    x2="7.50437"
                    y2="-2"
                    transform="matrix(1 3.23948e-06 -8.98475e-08 1 0.167969 4.17456)"
                    stroke="#1F1F1F"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <line
                    x1="2"
                    y1="-2"
                    x2="7.50437"
                    y2="-2"
                    transform="matrix(1 3.23948e-06 -8.98475e-08 1 0.167969 4.17456)"
                    stroke="#1F1F1F"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="w-full flex justify-center items-start gap-5 max-sm:hidden">
                <div className="h-2 w-[96px] bg-[#E0E0E0]">
                  <div className="h-2 w-[48px] bg-[#1F1F1F]"></div>
                </div>
                <div className="h-2 w-[96px] bg-[#E0E0E0]"></div>
                <div className="h-2 w-[96px] bg-[#E0E0E0]"></div>
                <div className="h-2 w-[96px] bg-[#E0E0E0]"></div>
                <div className="h-2 w-[96px] bg-[#E0E0E0]"></div>
              </div>

              <div className="flex flex-col justify-center items-start lg:gap-[30px] gap-[23px]">
                <div className="flex gap-2 w-full">
                  <img src={star} alt="star" />
                  <span className="lg:text-[40px] text-[15px] font-medium leading-[43.68px]">
                    Les énergies renouvelables
                  </span>
                </div>

                <div className="flex gap-2 w-full">
                  <img src={star} alt="star" />
                  <span className="lg:text-[40px] text-[15px] font-medium leading-[43.68px] text-[#A95454]">
                    L'agro-alimentaire
                  </span>
                </div>

                <div className="flex gap-2 w-full">
                  <img src={star} alt="star" />
                  <span className="lg:text-[40px] text-[15px] font-medium leading-[43.68px]">
                    Les technologies
                  </span>
                </div>

                <div className="flex gap-2 w-full">
                  <img src={star} alt="star" />
                  <span className="lg:text-[40px] text-[15px] font-medium leading-[43.68px]">
                    Le e-commerce
                  </span>
                </div>

                <div className="flex gap-2 w-full">
                  <img src={star} alt="star" />
                  <span className="lg:text-[40px] text-[15px] font-medium leading-[43.68px]">
                    Les solutions de paiement
                  </span>
                </div>
                <div className="w-full mt-5 max-sm:hidden">
                  <button className="px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
                    Suivant
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden w-full flex justify-center items-center mt-5">
            <button className="w-[160px] px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
              Suivant
            </button>
          </div>

          <div className="mt-7 lg:hidden ">
            <div className="w-full flex flex-col justify-center items-center px-12">
              <div className="lg:text-[40px] text-[15px] font-medium leading-[54px] text-justify">
                “ Notre objectif est de capturer et partager les connaissances,
                les expertises et les réseaux afin de créer des opportunités
                illimitées, que ce soit pour les acteurs africains à la
                recherche des meilleures talents pour développer leurs activités
                ou pour les experts du monde entier qui souhaitent lancer des
                projets innovants en Afrique. “
              </div>
              <div className="text-[#A95454] lg:text-[13px] text-[10px] font-bold lg:text-right text-center w-full">
                Sarah et Abdoulaye
              </div>
            </div>
          </div>
        </div>

        {/* 13 */}

        <div className="mt-7 px-12 border-t border-[#495057] border-opacity-[0.1]">
          <div className="w-full flex flex-col justify-center items-center gap-10 mt-7">
            <div className="lg:text-[40px] text-[15px] font-medium leading-[54px] lg:text-justify text-center lg:mx-auto">
              Rejoignez notre communauté et aidez-nous à construire la première
              plateforme de networking en ligne à destination du marché
              africain!
            </div>
            <div className="mx-auto flex gap-4">
              <button className="px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
                Se connecter
              </button>
              <button className="px-10 py-[18px] border-[0.5px] border-[#1F1F1F] rounded-[35px] text-base">
                Créer un compte
              </button>
            </div>
            <div className="w-full flex flex-wrap gap-10 lg:gap-5 justify-between mt-10">
              <div className="flex flex-col lg:gap-5 gap-[30px]">
                <p className="lg:text-[15px] text-[12px] text-[#1F1F1F] font-bold leading-[23px] uppercase">
                  Page d'accueil
                </p>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Missions de PANDA
                </li>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Fonctionnalités
                </li>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Découvrez les experts
                </li>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Découvrez les organisations en Afrique
                </li>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Offres d'emploi
                </li>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Evénements à venir
                </li>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Témoignages
                </li>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Les fondateurs
                </li>
              </div>

              <div className="flex flex-col lg:gap-5 gap-[30px]">
                <p className="lg:text-[15px] text-[12px] text-[#1F1F1F] font-bold leading-[23px] uppercase">
                  pour les EXPERTS
                </p>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Découvrez les organisations en Afrique
                </li>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Offres d'emploi
                </li>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Travel Map
                </li>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Evénements à venir
                </li>
              </div>

              <div className="flex flex-col lg:gap-5 gap-[30px]">
                <p className="lg:text-[15px] text-[12px] text-[#1F1F1F] font-bold leading-[23px] uppercase">
                  pour les organisations en Afrique
                </p>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Découvrez les experts
                </li>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Travel Map
                </li>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Evénements à venir
                </li>
              </div>

              <div className="flex flex-col lg:gap-5 gap-[30px]">
                <p className="lg:text-[15px] text-[12px] text-[#1F1F1F] font-bold leading-[23px] uppercase">
                  Contact
                </p>
                <li className="text-[13px] font-normal leading-5 text-[#1F1F1F]">
                  Nous contacter
                </li>
              </div>
            </div>
            <div className="w-full flex lg:flex-row flex-col justify-center items-start gap-5 mb-5">
              <div className="w-full flex justify-between items-center">
                <div className="flex justify-between items-center gap-12">
                  <pre className="text-[39.231px] font-[350] leading-[53.04px] max-sm:hidden">
                    P NDA
                  </pre>
                  <pre className="lg:hidden text-[23px] font-[350] leading-[53.04px]">
                    PANDA
                  </pre>
                  <div className="hidden w-[25px] h-[28px] border-[3px] border-black rounded-t-[16.028px] lg:flex justify-center items-center">
                    <img className="w-11 h-11" src={star} alt="star" />
                  </div>
                </div>

                <div className="text-[13px] font-normal leading-[20px] text-[#1F1F1F] max-sm:hidden">
                  © 2022 Tous droits réservés
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="116"
                  height="16"
                  viewBox="0 0 116 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M109.312 4.96133L109.34 5.43711L108.871 5.37885C107.161 5.15552 105.668 4.39816 104.4 3.12617L103.78 2.49504L103.62 2.96111C103.282 4.00006 103.498 5.09727 104.202 5.83521C104.578 6.24302 104.494 6.30128 103.845 6.05854C103.62 5.98086 103.423 5.9226 103.404 5.95173C103.338 6.0197 103.564 6.90329 103.742 7.25285C103.986 7.73834 104.484 8.21412 105.029 8.4957L105.489 8.71903L104.944 8.72874C104.418 8.72874 104.4 8.73845 104.456 8.94235C104.644 9.57349 105.386 10.2435 106.212 10.5348L106.795 10.7387L106.288 11.0494C105.536 11.496 104.653 11.7485 103.77 11.7679C103.348 11.7776 103 11.8165 103 11.8456C103 11.9427 104.146 12.4864 104.813 12.7001C106.814 13.3312 109.19 13.0593 110.975 11.9815C112.243 11.2145 113.511 9.69001 114.103 8.21412C114.422 7.42762 114.742 5.99057 114.742 5.30117C114.742 4.85452 114.77 4.79626 115.296 4.26222C115.606 3.95151 115.897 3.61166 115.953 3.51457C116.047 3.33008 116.038 3.33008 115.559 3.49515C114.76 3.78644 114.648 3.7476 115.042 3.31066C115.333 2.99995 115.681 2.43678 115.681 2.27171C115.681 2.24258 115.54 2.29113 115.38 2.37852C115.211 2.47562 114.835 2.62126 114.554 2.70865L114.046 2.87372L113.586 2.55329C113.333 2.37852 112.976 2.18432 112.788 2.12606C112.309 1.99012 111.576 2.00954 111.144 2.1649C109.97 2.60184 109.228 3.72818 109.312 4.96133Z"
                    fill="#1F1F1F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M53 14.0352H50V5.03516H53V14.0352Z"
                    fill="#1F1F1F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M51.4911 3.03516H51.474C50.5788 3.03516 50 2.36818 50 1.53464C50 0.683462 50.5964 0.0351562 51.5087 0.0351562C52.4209 0.0351562 52.9827 0.683462 53 1.53464C53 2.36818 52.4209 3.03516 51.4911 3.03516Z"
                    fill="#1F1F1F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M63.9999 14.0349H61.0519V9.33051C61.0519 8.14886 60.6253 7.34254 59.5581 7.34254C58.7437 7.34254 58.2586 7.88612 58.0455 8.41114C57.9675 8.5993 57.9484 8.86146 57.9484 9.12426V14.0352H55C55 14.0352 55.0389 6.06699 55 5.24187H57.9484V6.48737C58.3397 5.88864 59.0405 5.03516 60.6057 5.03516C62.5456 5.03516 64 6.29221 64 8.99312L63.9999 14.0349Z"
                    fill="#1F1F1F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.55073 15.0352V7.53457H0V4.94973H1.55073V3.3978C1.55073 1.28908 2.42638 0.0351562 4.91418 0.0351562H6.98534V2.62029H5.69072C4.72228 2.62029 4.65821 2.98153 4.65821 3.65569L4.65469 4.94943H7L6.72556 7.53428H4.65469V15.0352H1.55073Z"
                    fill="#1F1F1F"
                  />
                </svg>
              </div>
              <div className="lg:hidden text-[13px] font-normal leading-[20px] text-[#1F1F1F]">
                © 2022 Tous droits réservés
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
