import logoScss from './_Logo.module.scss';

type LogoProps = {
    image: {
      src: string;
      alt: string;
    };
    className: string
  };

const Logo = ({image, className}: LogoProps) => {

    return (
        <div className={logoScss[className]}>
            <img className={logoScss.logo__image} src={image.src} alt={image.alt} />
        </div>        
    )
}

export default Logo;