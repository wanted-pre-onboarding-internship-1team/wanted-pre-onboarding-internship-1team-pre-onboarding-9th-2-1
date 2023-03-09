import useFilter from '../hooks/useFilter';
import useSelectedFilter from '../hooks/useSelectedFilter';
import { createContext, useContext } from 'react';

const FilterContext = createContext();
const SelectedFilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { priceFilter, spaceCategoryFilter, initFilter } = useFilter();
  const {
    selectedPriceFilter,
    selectPriceFilter,
    resetPriceFilter,
    selectedSpaceCategoryFilter,
    addSpaceFilter,
    deleteSpaceFilter,
    isSelectedSpace,
    isPassedAllFilter,
    resetAllFilter,
  } = useSelectedFilter();

  const filterValue = { priceFilter, spaceCategoryFilter, initFilter };
  const selectedFilterValue = {
    selectedPriceFilter,
    selectPriceFilter,
    resetPriceFilter,
    selectedSpaceCategoryFilter,
    addSpaceFilter,
    deleteSpaceFilter,
    isSelectedSpace,
    isPassedAllFilter,
    resetAllFilter,
  };

  return (
    <FilterContext.Provider value={filterValue}>
      <SelectedFilterContext.Provider value={selectedFilterValue}>
        {children}
      </SelectedFilterContext.Provider>
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
export const useSelectedFilterContext = () => useContext(SelectedFilterContext);