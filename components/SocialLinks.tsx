import { ContactRound, GitFork, Mail } from "lucide-react";

export function SocialLinks() {
  return <div className="socials">
    <a href="mailto:shiwen.y@outlook.com"><Mail/> shiwen.y@outlook.com</a>
    <a href="https://linkedin.com/in/shiwen-lareina-yang" target="_blank" rel="noreferrer"><ContactRound/> LinkedIn</a>
    <a href="https://github.com/Lareina-Y" target="_blank" rel="noreferrer"><GitFork/> GitHub</a>
  </div>;
}
