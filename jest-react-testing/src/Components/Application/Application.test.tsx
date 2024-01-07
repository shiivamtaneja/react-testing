import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe('Application', () => {
  test('renders corrrectly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      // Instead of using Name we can use level
      // name: 'Job Application Form',
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', {
      // Instead of using Name we can use level
      // name: 'Section 1',
      level: 2
    });
    expect(sectionHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory', {
      // It also accepts selector tag just like getByLabelText
      selector: 'p'
    });
    expect(paragraphElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name'
    });
    expect(nameElement).toBeInTheDocument();

    // Get's that element which is of the type input and has label 'Name'
    const nameElementGetByLabelText = screen.getByLabelText('Name', {
      // Without this selector tag, it gives error since 2 elements have the same label = 'Name'.
      selector: 'input'
    });
    expect(nameElementGetByLabelText).toBeInTheDocument();

    const nameElementGetByPlaceholderText = screen.getByPlaceholderText('Fullname');
    expect(nameElementGetByPlaceholderText).toBeInTheDocument();

    const nameElementGetByDisplayValue = screen.getByDisplayValue('Shivam');
    expect(nameElementGetByDisplayValue).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio'
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const termsElementGetByLabelText = screen.getByLabelText('I agree to the terms and conditions');
    expect(termsElementGetByLabelText).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});