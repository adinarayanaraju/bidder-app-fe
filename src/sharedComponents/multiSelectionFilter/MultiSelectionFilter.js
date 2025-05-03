import React, { useEffect, useState } from "react";
import "./multiSelectionFilter.scss";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Button,
} from "reactstrap";

export default function MultiSelectionFilter({
  label,
  options = [], //{label, value}
  value = [],
  onApply,
  disabled = false,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    setSelected(value);
  }, [value, dropdownOpen]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleChange = (option) => {
    const exists = selected?.some((item) => item?.value === option?.value);
    if (exists) {
      setSelected(selected?.filter((item) => item?.value !== option?.value));
    } else {
      setSelected([...selected, option]);
    }
  };

  const handleSelectAllToggle = () => {
    if (selected?.length === options?.length) {
      setSelected([]); //Deselect
    } else {
      setSelected([...options]); //Select all
    }
  };

  const handleApply = () => {
    onApply?.(selected);
    setDropdownOpen(false);
  };

  const handleReset = () => {
    setSelected([]);
  };

  const isSelected = (option) => selected?.some((item)=> item?.value === option?.value);

  const isAllSelected = selected?.length === options?.length;
  
  return (
    <>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        className="filter-dropdown-wrapper"
      >
        <DropdownToggle caret disabled={disabled} color="light">
          {label}
          {value?.length > 0 && (
            <span className="selected-filter-counter">{value?.length}</span>
          )}
        </DropdownToggle>
        <DropdownMenu className="filter-dropdown-menu">
          <div className="filter-list-wrapper">
            <div className="form-check d-flex align-items-center cursor-pointer">
              <Input
                type="checkbox"
                className="form-check-input me-2"
                id={"selectAll"}
                disabled={disabled}
                onChange={handleSelectAllToggle}
                checked={isAllSelected}
              />
              <label htmlFor={"selectAll"} className="form-check-label">{isAllSelected ? "Deselect All" : "Select All"}</label>
            </div>
            <div className="checkbox-list">
              {options?.map((option) => (
                <DropdownItem
                  className="px-0 drop-down-item"
                  key={option?.value}
                  toggle={false}
                >
                  <div className="form-check d-flex align-items-center">
                    <Input
                      type="checkbox"
                      className="form-check-input me-2"
                      id={option?.value}
                      disabled={disabled}
                      onChange={() => handleChange(option)}
                      checked={isSelected(option)}
                    />
                    <label htmlFor={option?.value} className="form-check-label">{option?.label}</label>
                  </div>
                </DropdownItem>
              ))}
            </div>
          </div>

          <div className="filter-btn-wrapper d-flex justify-content-between mt-3 gap-2">
            <Button size="sm" className="reset-btn" onClick={handleReset}>
              Reset
            </Button>
            <Button size="sm" className="apply-btn" onClick={handleApply}>
              Apply
            </Button>
          </div>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
