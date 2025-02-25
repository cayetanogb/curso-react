import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const clubs = [
  {
    userName: "MalagaCF",
    name: "Malaga Club de Futbol",
    isFollowing: true,
  },
  {
    userName: "GranadaCF",
    name: "Granada Club de Futbol",
    isFollowing: false,
  },
  {
    userName: "CordobaCF",
    name: "Cordoba Club de Futbol",
    isFollowing: false,
  },
];

export function App() {
  return (
    <section className="App">
      {clubs.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            isFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
