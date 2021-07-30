import { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Select from "react-select";
import Button from "../../styles/GlobalComponents/Button.jsx";
import { formatToISO, fromJSDate } from "../../utils/date.js";
import {
  FormEditor,
  FormGroup,
  InputTitle,
  TextAreaDescription,
  DateTimeContainer,
  SelectContainer,
  ErrorLabel,
} from "./PostEditorStyles.js";

export const PostEditor = ({
  title,
  description,
  category,
  categories,
  creationTime,
  id,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [date, setDate] = useState();
  const [categoryValue, setCategoryValue] = useState();

  useEffect(() => {
    setDate(creationTime ? new Date(creationTime) : undefined);
  }, [creationTime]);

  const onChangeForm = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const onChangeDate = (selectedDate) => {
    setDate(selectedDate);
    const dateISO = formatToISO(fromJSDate(selectedDate));

    onChangeForm("creationTime", dateISO);
  };

  const onChangeSelect = (selectedOption) => {
    const optionCategory = { value: selectedOption, label: selectedOption };
    setCategoryValue(optionCategory);

    onChangeForm("category", selectedOption);
  };

  const handleVerification = () => {
    setFormErrors({
      title: !title,
      description: !description,
      category: !category,
      creationTime: !creationTime,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const initialData = { title, description, category, creationTime };
    const data = { ...initialData, ...formData };

    handleVerification();

    onSubmit?.(data);
  };

  return (
    <FormEditor onSubmit={handleOnSubmit} testId={`post-edit-form-${id}`}>
      <FormGroup alignItem="flex-start">
        <InputTitle
          placeholder="Title"
          value={formData.title || title}
          onChange={(e) => onChangeForm("title", e.target.value)}
        />
        {formErrors.title && (
          <ErrorLabel showPadding>The title is required</ErrorLabel>
        )}
      </FormGroup>
      <FormGroup justifyContent="space-between" row>
        <SelectContainer>
          <Select
            placeholder="Select a category"
            value={categoryValue || { value: category, label: category }}
            styles={{ minWidth: "200px" }}
            options={categories}
            onChange={(e) => onChangeSelect(e.value)}
          />
          {formErrors.category && (
            <ErrorLabel>The category is required</ErrorLabel>
          )}
        </SelectContainer>
        <DateTimeContainer>
          <DateTimePicker value={date} onChange={onChangeDate} disableClock />
          {formErrors.creationTime && (
            <ErrorLabel>The creation time is required</ErrorLabel>
          )}
        </DateTimeContainer>
      </FormGroup>
      <FormGroup fitHeight alignItem="flex-start">
        <TextAreaDescription
          placeholder="Tell your story..."
          value={formData.description || description}
          onChange={(e) => onChangeForm("description", e.target.value)}
        />
        {formErrors.description && (
          <ErrorLabel showPadding>The description is required</ErrorLabel>
        )}
      </FormGroup>
      <Button typeButton="secondary" type="submit">
        Submit Changes
      </Button>
    </FormEditor>
  );
};
