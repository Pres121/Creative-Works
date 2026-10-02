import imgMulanjeAerial from "@/assets/DJI_0311.JPG.jpeg";
import imgFCBAerial from "@/assets/DJI_0699.jpg.jpeg";
import imgIctamConference from "@/assets/3c925d3847e74f538f90538846ddd082.jpg.jpeg";
import imgHollywoodForest from "@/assets/FB_IMG_1763037266819.jpg.jpeg";
import imgMlwDocuInterview from "@/assets/IMG-20241129-WA0009.jpg.jpeg";
import imgFactoryWorker from "@/assets/IMG-20250402-WA0012.jpg.jpeg";
import imgTextileDetail from "@/assets/IMG-20250403-WA0000.jpg.jpeg";
import imgVillageFieldDocu from "@/assets/IMG-20250723-WA0009.jpg.jpeg";
import imgMlwCampusPortrait from "@/assets/IMG_20190805_140249.jpg.jpeg";
import imgVillageMultiCam from "@/assets/IMG_20230926_120448_624.jpg.jpeg";
import imgIllovoGimbal from "@/assets/IMG_20230927_123756_661.jpg.jpeg";
import imgAtemLiveStream from "@/assets/IMG_20231111_111038_791.jpg.jpeg";
import imgStudioSoftbox from "@/assets/IMG_20240411_145007_982.jpg.jpeg";
import imgTvStudioSet from "@/assets/IMG_20240728_185430_441 (1).jpg.jpeg";
import imgFCBAnniversary from "@/assets/IMG_20250729_115548_678.jpg.jpeg";
import imgCorporateInterview from "@/assets/IMG_20250808_144148_807.jpg.jpeg";
import imgTeaPlantation from "@/assets/IMG_20250818_181646_061.jpg.jpeg";
import imgMlwCreatorStage from "@/assets/IMG_20251010_104505_368.jpg.jpeg";
import imgLakesideStreamStation from "@/assets/IMG_20260307_133830_943.jpg.jpeg";

// NEW IMAGES
import imgEvent0016 from "@/assets/IMG-20260930-WA0016.jpg.jpeg";
import imgEvent0019 from "@/assets/IMG-20260930-WA0019.jpg.jpeg";
import imgEvent0023 from "@/assets/IMG-20260930-WA0023.jpg.jpeg";
import imgKumudzi from "@/assets/kumudzi1.jpeg";
import imgMshootin from "@/assets/mshootin.jpeg";
import imgOffice1 from "@/assets/office1.jpeg";
import imgOffice2 from "@/assets/office2.jpeg";
import imgSabbath from "@/assets/sabbath.jpeg";
import imgAgm from "@/assets/agm.jpeg";
import imgGround1 from "@/assets/ground1.jpeg";

export type Shot = {
  id: string;
  src: string;
  alt: string;
  title: string;
  client?: string;
  h: string;
  category: string;
  service: "Photography" | "Videography" | "Aerial";
  objectPos?: string;
};

export type Production = {
  src: string;
  alt: string;
  title: string;
  meta: string;
  tab: string;
  badge?: string;
  objectPos?: string;
};

export const ALL_IMAGES = {
  mulanjeAerial: imgMulanjeAerial,
  fcbAerial: imgFCBAerial,
  ictamConference: imgIctamConference,
  hollywoodForest: imgHollywoodForest,
  mlwDocuInterview: imgMlwDocuInterview,
  factoryWorker: imgFactoryWorker,
  textileDetail: imgTextileDetail,
  villageFieldDocu: imgVillageFieldDocu,
  mlwCampusPortrait: imgMlwCampusPortrait,
  villageMultiCam: imgVillageMultiCam,
  illovoGimbal: imgIllovoGimbal,
  atemLiveStream: imgAtemLiveStream,
  studioSoftbox: imgStudioSoftbox,
  tvStudioSet: imgTvStudioSet,
  fcbAnniversary: imgFCBAnniversary,
  corporateInterview: imgCorporateInterview,
  teaPlantation: imgTeaPlantation,
  mlwCreatorStage: imgMlwCreatorStage,
  lakesideStreamStation: imgLakesideStreamStation,

  // NEW IMAGES
  event0016: imgEvent0016,
  event0019: imgEvent0019,
  event0023: imgEvent0023,
  kumudzi: imgKumudzi,
  mshootin: imgMshootin,
  office1: imgOffice1,
  office2: imgOffice2,
  sabbath: imgSabbath,
  agm: imgAgm,
  ground1: imgGround1,
};

export const PORTFOLIO_GALLERY: Shot[] = [
  {
    id: "mulanje-drone",
    src: imgMulanjeAerial,
    title: "Mulanje Mountain Peak & Grounds",
    client: "Tourism & Documentary",
    alt: "Aerial drone panorama of Mulanje Mountain and surrounding sports ground",
    h: "h-64",
    category: "Travel",
    service: "Aerial",
    objectPos: "object-center",
  },

  {
    id: "fcb-stadium-drone",
    src: imgFCBAerial,
    title: "First Capital Bank Corporate Cup",
    client: "First Capital Bank",
    alt: "Aerial drone view of full stadium crowd during First Capital Bank event",
    h: "h-72",
    category: "Events",
    service: "Aerial",
    objectPos: "object-center",
  },

  {
    id: "ictam-women-conf",
    src: imgIctamConference,
    title: "ICTAM Women in ICT Conference",
    client: "ICT Association of Malawi",
    alt: "Viewfinder preview capturing speaker at Women in ICT conference",
    h: "h-56",
    category: "Events",
    service: "Videography",
    objectPos: "object-top",
  },

  {
    id: "boy-harnessed-wind",
    src: imgHollywoodForest,
    title: "The Boy Who Harnessed The Wind",
    client: "Hollywood Feature Film Support",
    alt: "Behind-the-scenes camera setup in forest location with crew",
    h: "h-64",
    category: "Brand Films",
    service: "Videography",
    objectPos: "object-top",
  },

  {
    id: "mlw-docu-interview",
    src: imgMlwDocuInterview,
    title: "Community Health Documentary",
    client: "Malawi Liverpool Wellcome",
    alt: "Field production crew recording outdoor documentary interview",
    h: "h-60",
    category: "Editorial",
    service: "Videography",
    objectPos: "object-top",
  },

  {
    id: "factory-production",
    src: imgFactoryWorker,
    title: "Industrial Manufacturing Operations",
    client: "Corporate Brand Shoot",
    alt: "Factory workers operating heavy precision machinery on production floor",
    h: "h-64",
    category: "Products",
    service: "Photography",
    objectPos: "object-top",
  },

  {
    id: "textile-macro",
    src: imgTextileDetail,
    title: "Textile Cotton Processing Detail",
    client: "Manufacturing Campaign",
    alt: "Macro detail shot of cotton textile manufacturing thread process",
    h: "h-48",
    category: "Products",
    service: "Photography",
    objectPos: "object-center",
  },

  {
    id: "rural-field-docu",
    src: imgVillageFieldDocu,
    title: "Rural Outreach & Field Impact",
    client: "Save the Children",
    alt: "Documentary camera operator interviewing village community member",
    h: "h-64",
    category: "Editorial",
    service: "Videography",
    objectPos: "object-top",
  },

  {
    id: "mlw-campus-portrait",
    src: imgMlwCampusPortrait,
    title: "MLW Research Fellow Portrait",
    client: "Malawi Liverpool Wellcome",
    alt: "Outdoor corporate portrait at Malawi Liverpool Wellcome Trust campus",
    h: "h-72",
    category: "Portraits",
    service: "Photography",
    objectPos: "object-top",
  },

  {
    id: "multicam-field-crew",
    src: imgVillageMultiCam,
    title: "Village Community Documentary",
    client: "International NGO Production",
    alt: "Multi-camera production unit filming in rural village setting",
    h: "h-60",
    category: "Editorial",
    service: "Videography",
    objectPos: "object-top",
  },

  {
    id: "illovo-gimbal-op",
    src: imgIllovoGimbal,
    title: "Illovo Sugar Corporate Event",
    client: "Illovo Sugar Malawi",
    alt: "Cinematographer on handheld gimbal filming key speaker at Illovo event",
    h: "h-64",
    category: "Events",
    service: "Videography",
    objectPos: "object-top",
  },

  {
    id: "live-stream-atem",
    src: imgAtemLiveStream,
    title: "Corporate Auditorium Live Stream",
    client: "Live Broadcast Client",
    alt: "ATEM Mini vision mixing and broadcast control desk in auditorium",
    h: "h-56",
    category: "Events",
    service: "Videography",
    objectPos: "object-top",
  },

  {
    id: "studio-lighting-rig",
    src: imgStudioSoftbox,
    title: "Studio Lighting & Camera Setup",
    client: "Commercial Studio",
    alt: "Professional studio softbox lights, backdrop and cinema camera rig",
    h: "h-72",
    category: "Portraits",
    service: "Photography",
    objectPos: "object-top",
  },

  {
    id: "tv-studio-set",
    src: imgTvStudioSet,
    title: "National TV Broadcast Series",
    client: "Malawi TV Production",
    alt: "Television set production with presenter on couch and clapperboard",
    h: "h-64",
    category: "Brand Films",
    service: "Videography",
    objectPos: "object-top",
  },

  {
    id: "fcb-30th-anniversary",
    src: imgFCBAnniversary,
    title: "First Capital Bank 30th Anniversary",
    client: "First Capital Bank",
    alt: "Corporate backdrop red carpet setup for FCB 30 years celebration",
    h: "h-56",
    category: "Events",
    service: "Photography",
    objectPos: "object-top",
  },

  {
    id: "corporate-interview-gimbal",
    src: imgCorporateInterview,
    title: "Executive Interview Production",
    client: "Corporate Client",
    alt: "Camera operator filming indoor corporate executive interview",
    h: "h-60",
    category: "Brand Films",
    service: "Videography",
    objectPos: "object-top",
  },

  {
    id: "tea-plantation-cinema",
    src: imgTeaPlantation,
    title: "Thyolo Tea Estates Commercial",
    client: "Brand Campaign",
    alt: "Filming in tea plantation with light reflector and mountain background",
    h: "h-64",
    category: "Travel",
    service: "Videography",
    objectPos: "object-top",
  },

  {
    id: "mlw-creator-stage",
    src: imgMlwCreatorStage,
    title: "CREATOR Conference Live Feed",
    client: "Malawi Liverpool Wellcome",
    alt: "Live event monitoring and camera feed mixing at MLW CREATOR conference",
    h: "h-56",
    category: "Events",
    service: "Videography",
    objectPos: "object-top",
  },

 

  {
    id: "lakeside-stream-unit",
    src: imgLakesideStreamStation,
    title: "Lakeside Outdoor Live Stream Station",
    client: "Lake Malawi Special Event",
    alt: "Outdoor live broadcast control station with mixer and monitoring monitors",
    h: "h-64",
    category: "Events",
    service: "Videography",
    objectPos: "object-top",
  },

  // =========================================================
  // NEW PORTFOLIO IMAGES
  // =========================================================

  {
    id: "event-wa0016",
    src: imgEvent0016,
    title: "Event Coverage",
    client: "Corporate Event",
    alt: "Professional event photography coverage",
    h: "h-64",
    category: "Events",
    service: "Photography",
  },

  {
    id: "event-wa0019",
    src: imgEvent0019,
    title: "Event Moments",
    client: "Event Production",
    alt: "Professional event photography and coverage",
    h: "h-60",
    category: "Events",
    service: "Photography",
  },

  {
    id: "event-wa0023",
    src: imgEvent0023,
    title: "Event Production",
    client: "Corporate Event",
    alt: "Professional photography during a corporate event",
    h: "h-64",
    category: "Events",
    service: "Photography",
  },

  {
    id: "kumudzi-documentary",
    src: imgKumudzi,
    title: "Kumudzi Documentary",
    client: "Documentary Production",
    alt: "Documentary production captured in a rural community setting",
    h: "h-64",
    category: "Editorial",
    service: "Videography",
  },

  {
    id: "mshootin-production",
    src: imgMshootin,
    title: "On-Location Production",
    client: "Creative Production",
    alt: "Behind-the-scenes production shoot",
    h: "h-60",
    category: "Brand Films",
    service: "Videography",
  },

  {
    id: "office-corporate-one",
    src: imgOffice1,
    title: "Corporate Office Shoot",
    client: "Corporate Client",
    alt: "Professional corporate photography session in an office",
    h: "h-64",
    category: "Portraits",
    service: "Photography",
  },

  {
    id: "office-corporate-two",
    src: imgOffice2,
    title: "Office Brand Photography",
    client: "Corporate Client",
    alt: "Professional office photography and corporate branding shoot",
    h: "h-64",
    category: "Products",
    service: "Photography",
  },

  {
    id: "sabbath-event",
    src: imgSabbath,
    title: "Sabbath Event Coverage",
    client: "Event Coverage",
    alt: "Professional photography coverage at a Sabbath event",
    h: "h-64",
    category: "Events",
    service: "Photography",
  },

  {
    id: "agm-event",
    src: imgAgm,
    title: "Annual General Meeting",
    client: "Corporate Event",
    alt: "Professional photography coverage at an annual general meeting",
    h: "h-64",
    category: "Events",
    service: "Photography",
  },

  {
    id: "ground-event",
    src: imgGround1,
    title: "Outdoor Event Coverage",
    client: "Event Production",
    alt: "Outdoor event photography and production coverage",
    h: "h-64",
    category: "Events",
    service: "Photography",
  },
];

export const PRODUCTIONS: Production[] = [
  {
    src: imgHollywoodForest,
    alt: "Behind-the-scenes camera setup for feature film support",
    title: "The Boy Who Harnessed The Wind",
    meta: "Hollywood Feature Support · Production Crew",
    tab: "Brand Films",
    badge: "Feature Support",
    objectPos: "object-top",
  },

  {
    src: imgTvStudioSet,
    alt: "TV Studio set with presenter and production clapperboard",
    title: "National TV Broadcast Series",
    meta: "TV Programs & Documentaries · 2025-2026",
    tab: "Brand Films",
    badge: "TV Broadcast",
    objectPos: "object-top",
  },

  {
    src: imgTeaPlantation,
    alt: "Tea estate video shoot with reflector and mountain backdrop",
    title: "Thyolo Estate Brand Film",
    meta: "Commercial Cinematography · Location Shoot",
    tab: "Brand Films",
    objectPos: "object-top",
  },

  {
    src: imgFCBAerial,
    alt: "Aerial drone shot of First Capital Bank Stadium crowd",
    title: "First Capital Bank Corporate Cup",
    meta: "Aerial Coverage & Highlights · FCB",
    tab: "commercial",
    badge: "Aerial",
    objectPos: "object-center",
  },

  {
    src: imgFCBAnniversary,
    alt: "First Capital Bank 30th anniversary backdrop",
    title: "First Capital Bank 30th Gala",
    meta: "Corporate Event Photography",
    tab: "commercial",
    objectPos: "object-top",
  },

  {
    src: imgMulanjeAerial,
    alt: "Mulanje Mountain drone view",
    title: "Mulanje Massif Expedition",
    meta: "Aerial Photography & Landscape Stills",
    tab: "commercial",
    objectPos: "object-center",
  },

  {
    src: imgMlwDocuInterview,
    alt: "Malawi Liverpool Wellcome field interview shoot",
    title: "MLW Health Research Stories",
    meta: "Field Documentary · 5+ Year Partnership",
    tab: "Editorial",
    badge: "Documentary",
    objectPos: "object-top",
  },

  {
    src: imgVillageMultiCam,
    alt: "Multi-camera village documentary production",
    title: "Community Voices Malawi",
    meta: "Multi-Cam Field Production",
    tab: "Editorial",
    objectPos: "object-top",
  },

 

  // NEW PRODUCTIONS
  {
    src: imgKumudzi,
    alt: "Documentary production in a rural community",
    title: "Kumudzi Documentary",
    meta: "Documentary Production · Field Shoot",
    tab: "Editorial",
    badge: "Documentary",
  },

  {
    src: imgMshootin,
    alt: "On-location creative production shoot",
    title: "On-Location Production",
    meta: "Creative Production · Location Shoot",
    tab: "Brand Films",
  },

  {
    src: imgEvent0016,
    alt: "Professional corporate event coverage",
    title: "Corporate Event Coverage",
    meta: "Event Photography · Professional Coverage",
    tab: "commercial",
  },

  {
    src: imgAgm,
    alt: "Annual general meeting photography",
    title: "Annual General Meeting",
    meta: "Corporate Event Photography",
    tab: "commercial",
  },
];

export const JOURNAL_POSTS = [
  {
    title: "Behind The Lens: Supporting Hollywood Production in Malawi",
    topic: "Behind The Scenes",
    date: "14 Aug 2026",
    read: "6 min",
    img: imgHollywoodForest,
    alt: "Behind-the-scenes film crew in forest setting",
    excerpt:
      "Insights and logistics behind our local production support for 'The Boy Who Harnessed The Wind'.",
  },

  

  {
    title: "Cinematography in High-Contrast Natural Light: Thyolo Tea Estates",
    topic: "Lighting",
    date: "19 Jul 2026",
    read: "4 min",
    img: imgTeaPlantation,
    alt: "Tea plantation shoot with reflector disc",
    excerpt:
      "Balancing harsh mid-day sunlight using large diffusers and silver bounces in mountain terrain.",
  },

  {
    title: "5 Years of Documenting Impact: Partnering with MLW",
    topic: "Behind The Scenes",
    date: "04 Jun 2026",
    read: "7 min",
    img: imgMlwDocuInterview,
    alt: "MLW field documentary crew interviewing participant",
    excerpt:
      "Building trust and capturing authentic stories across medical research field sites in Malawi.",
  },

  {
    title: "Studio Lighting Masterclass: Softboxes vs Direct Keying",
    topic: "Lighting",
    date: "18 May 2026",
    read: "4 min",
    img: imgStudioSoftbox,
    alt: "Studio photography softbox rig and camera setup",
    excerpt:
      "Why softbox modifiers create timeless skin tones for executive corporate portraiture.",
  },

  {
    title: "Aerial Cinematography over Malawi: Wind, Elevation & Frame Rates",
    topic: "Post",
    date: "26 Apr 2026",
    read: "5 min",
    img: imgMulanjeAerial,
    alt: "Mulanje Mountain aerial drone shot",
    excerpt:
      "Navigating mountain updrafts and choosing the right shutter angles for ultra-smooth drone passes.",
  },
];