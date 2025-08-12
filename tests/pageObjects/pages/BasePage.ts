import { ValidationHelpers } from '../../utils/ValidationHelpers';
import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly pageUrl: string;
  readonly baseUrl: string;

  constructor(page: Page, pageUrl: string) {
    this.page = page;
    this.pageUrl = pageUrl;
    this.baseUrl = ValidationHelpers.getEnvVariable('BASE_URL');
  }

  async loadPage(): Promise<void> {
    await this.page.waitForURL(this.getFullPageUrl());
  }

  getFullPageUrl(): string {
    return this.baseUrl + this.pageUrl;
  }
}
