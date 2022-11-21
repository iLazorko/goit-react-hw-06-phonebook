// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterValue } from '../../Redux/contactsSlice';
import { getFilter } from '../../Redux/selectors.js';

import { InputFilter, LabelFilter, FilterWrap } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChange = evt =>
    dispatch(filterValue(evt.target.value.toLowerCase()));

  return (
    <FilterWrap>
      <LabelFilter htmlFor="filter">
        Find contacts by name
        <InputFilter
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </LabelFilter>
    </FilterWrap>
  );
}

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };
