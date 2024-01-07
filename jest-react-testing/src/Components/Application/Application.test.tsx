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

    const nameElement = screen.getByRole('textbox', {
      name: 'Name'
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio'
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});