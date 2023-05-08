import PropTypes from "prop-types";
import {SectionWrapper, Title} from './Section.styled';


export const Section = ({title, children}) => {
    return (
        <SectionWrapper>
            <div>
            {title && <Title>{title}</Title>}
            {children}
            </div>
        </SectionWrapper>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };