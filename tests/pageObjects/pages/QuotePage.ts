import { CompanySize, ContactWay } from '../../enums/QuotePageEnums';
import { Dropdown } from '../components/Dropdown';
import { Locator, Page } from '@playwright/test';

export class QuotePage {
  readonly page: Page;
  readonly companySizeDropdown: Dropdown<CompanySize>;
  readonly contactWayDropdown: Dropdown<ContactWay>;
  readonly validationErrorLocators: Locator[];
  readonly pageUrl = 'https://nordpass.com/plans/business/inquiry/';

  constructor(page: Page) {
    this.page = page;
    this.companySizeDropdown = new Dropdown(
      page.getByTestId('business-contact-inquiry-company-size')
    );
    this.contactWayDropdown = new Dropdown(
      page.getByTestId('business-contact-inquiry-company-contact-preference')
    );
    this.validationErrorLocators = this.constructValidationLocators();
  }

  public get sendButton(): Locator {
    return this.page.getByTestId('business-contact-inquiry-submit-button');
  }

  public get fullNameField(): Locator {
    return this.page.getByTestId('business-contact-inquiry-name');
  }

  public get emailField(): Locator {
    return this.page.getByTestId('business-contact-inquiry-email');
  }

  public get companyNameField(): Locator {
    return this.page.getByTestId('business-contact-inquiry-company-name');
  }

  public get successfulSubmitionMessage(): Locator {
    return this.page.locator(
      '//div[contains(@class, "success")]//p[contains(@class, "text-success")]'
    );
  }

  async selectCompanySize(value: CompanySize): Promise<void> {
    await this.companySizeDropdown.toggleDropdown();
    await this.companySizeDropdown.selectByValue(value);
  }

  async selectContactWay(value: ContactWay): Promise<void> {
    await this.contactWayDropdown.toggleDropdown();
    await this.contactWayDropdown.selectByValue(value);
  }

  async fillForm(
    fullName: string,
    email: string,
    companyName: string,
    companySize: CompanySize,
    contactWay: ContactWay
  ): Promise<void> {
    await this.fullNameField.fill(fullName);
    await this.emailField.fill(email);
    await this.companyNameField.fill(companyName);
    await this.selectCompanySize(companySize);
    await this.selectContactWay(contactWay);
  }

  private constructValidationLocators(): Locator[] {
    const validationErrorIds: string[] = [
      'form-field-message-fullName',
      'form-field-message-email',
      'form-field-message-companyName',
      'form-field-message-companySize',
      'form-field-message-contactPreference',
    ];

    return validationErrorIds.map(id => this.page.getByTestId(id));
  }
}
