
// Note Lauryn Yau, Eugene Zhu had roletype dev but role of designer so I consolidated roletype to match role
import { MemberCardProps } from "../../components/shared/MemberCard";

import Johnson from "../../assets/team-headshots/Johnson.jpg";
import Hinako from "../../assets/team-headshots/Hinako.jpg";
import Bryan from "../../assets/team-headshots/BryanDang.png";
import Jimmy from "../../assets/team-headshots/JimmyHui.png";
import Teddy from "../../assets/team-headshots/TeddyMalhan.png";
import Tulika from "../../assets/team-headshots/Tulika.jpg";
import Lauryn from "../../assets/team-headshots/LaurynYau.png";
import Harpreet from "../../assets/team-headshots/HarpreetDubb.png";
import Jerry from "../../assets/team-headshots/JerryDeng.png";
import Joshua from "../../assets/team-headshots/JoshuaLi.png";
import blueprint from "../../assets/team-headshots/blueprint.jpg";

export const ReelYouth: MemberCardProps[] = [
  {
    name: "Johnson Luong",
    photoUrl: Johnson,
    linkedinUrl: "https://www.linkedin.com/in/johnson-luong/",
    roleType: "techLead",
    role: "Tech Lead",
  },
  {
    name: "Hinako Kamiya",
    photoUrl: Hinako,
    linkedinUrl: "https://www.linkedin.com/in/hinako-kamiya/",
    roleType: "pm",
    role: "Product Manager",
  },
  {
    name: "Lauryn Yau",
    photoUrl: Lauryn,
    linkedinUrl: "https://www.linkedin.com/in/laurynyau/",
    roleType: "designer",
    role: "Designer",
  },
  {
    name: "Eugene Zhu",
    photoUrl: blueprint,
    linkedinUrl: "https://www.linkedin.com/in/eugenezhu/",
    roleType: "designer",
    role: "Designer",
  },
  {
    name: "Joshua Li",
    photoUrl: Joshua,
    linkedinUrl: "https://www.linkedin.com/in/joshuajli/",
    roleType: "dev",
    role: "Senior Developer",
  },
  {
    name: "Jerry Deng",
    photoUrl: Jerry,
    linkedinUrl: "https://www.linkedin.com/in/jerrydngzh/",
    roleType: "dev",
    role: "Senior Developer",
  },
  {
    name: "Harpreet Dubb",
    photoUrl: Harpreet,
    linkedinUrl: "https://www.linkedin.com/in/harpreet-dubb/",
    roleType: "dev",
    role: "Junior Developer",
  },
  {
    name: "Tulika Varma",
    photoUrl: Tulika,
    linkedinUrl: "https://www.linkedin.com/in/tulika-varma-962165278/",
    roleType: "dev",
    role: "Junior Developer",
  },
  {
    name: "Teddy Malhan",
    photoUrl: Teddy,
    linkedinUrl: "https://www.linkedin.com/in/teddymalhan/",
    roleType: "dev",
    role: "Junior Developer",
  },
  {
    name: "Jimmy Hui",
    photoUrl: Jimmy,
    linkedinUrl: "https://www.linkedin.com/in/jimmy--hui/",
    roleType: "dev",
    role: "Junior Developer",
  },
  {
    name: "Bryan Dang",
    photoUrl: Bryan,
    linkedinUrl: "https://www.linkedin.com/in/bryanjhdang/",
    roleType: "dev",
    role: "Junior Developer",
  },
];