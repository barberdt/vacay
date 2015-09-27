import { Style } from 'radium';
import normalize from 'utils/normalize';

class Normalize extends Style {}

Normalize.defaultProps = { rules: normalize };

export default Normalize;
