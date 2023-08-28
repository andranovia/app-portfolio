
import PropTypes from "prop-types";

const Image = ({ src, fallback }) => {
    return (
        <picture>
            <source srcSet={src} type="image/webp" />
            <img src={fallback} />
        </picture>
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    fallback: PropTypes.string.isRequired,

};

export default Image;
