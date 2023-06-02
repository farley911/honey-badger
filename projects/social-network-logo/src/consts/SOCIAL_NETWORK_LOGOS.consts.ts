import { SocialNetwork } from "../models/social-network.interface";
import { SocialNetworkNames } from "./social-network-names.enum";

export const SOCIAL_NETWORK_LOGOS: Map<SocialNetworkNames, SocialNetwork> = new Map([
  [SocialNetworkNames.discord, {
    name: SocialNetworkNames.discord,
    logo: "assets/discord.png",
  },],
  [SocialNetworkNames.facebook, {
    name: SocialNetworkNames.facebook,
    logo: "assets/facebook.png",
  },],
  [SocialNetworkNames.fansly, {
    name: SocialNetworkNames.fansly,
    logo: "assets/fansly.png",
  },],
  [SocialNetworkNames.instagram, {
    name: SocialNetworkNames.instagram,
    logo: "assets/instagram.png",
  },],
  [SocialNetworkNames.linkedin, {
    name: SocialNetworkNames.linkedin,
    logo: "assets/linkedin.png",
  },],
  [SocialNetworkNames.onlyfans, {
    name: SocialNetworkNames.onlyfans,
    logo: "assets/onlyfans.png",
  },],
  [SocialNetworkNames.snapchat, {
    name: SocialNetworkNames.snapchat,
    logo: "assets/snapchat.png",
  },],
  [SocialNetworkNames.telegram, {
    name: SocialNetworkNames.telegram,
    logo: "assets/telegram.png",
  },],
  [SocialNetworkNames.tiktok, {
    name: SocialNetworkNames.tiktok,
    logo: "assets/tiktok.png",
  },],
  [SocialNetworkNames.twitch, {
    name: SocialNetworkNames.twitch,
    logo: "assets/twitch.png",
  },],
  [SocialNetworkNames.twitter, {
    name: SocialNetworkNames.twitter,
    logo: "assets/twitter.png",
  },],
  [SocialNetworkNames.whatsapp, {
    name: SocialNetworkNames.whatsapp,
    logo: "assets/whatsapp.png",
  },],
  [SocialNetworkNames.youtube, {
    name: SocialNetworkNames.youtube,
    logo: "assets/youtube.png",
  },],
]);
