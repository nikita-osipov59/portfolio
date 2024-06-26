import { Container } from "@/components/ui/Container";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "@/router/PATH";
import { Logo } from "@/components/ui/icons/Logo";
import style from "./style.module.scss";
import { ExternalLink, X } from "lucide-react";

export const PreviewHeader = ({ link }) => {
  return (
    <header className={style.previewHeader}>
      <Container>
        <nav>
          <Link to={ROUTER_PATH.HOME}>
            <Logo />
          </Link>
          <ul>
            <li>
              <Link to={`https://${link}`} target="_blank">
                <ExternalLink className={style.externalLink} size={25} />
              </Link>
            </li>
            <span></span>
            <li>
              <Link to={ROUTER_PATH.HOME}>
                <X className={style.xMark} size={30} />
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
