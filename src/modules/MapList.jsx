import PropTypes from 'prop-types'

export default function MapList({ children }) {
    return (
        <div>{children}</div>
    )
}

MapList.defaultProps = {
    
}
MapList.propTypes = {
    children: PropTypes.node.isRequired    
}
