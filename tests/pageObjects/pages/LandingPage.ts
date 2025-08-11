import { Locator, Page } from '@playwright/test';

interface NavigationBarButton {
  locator: Locator;
  name: string;
}

export class LandingPage {
  readonly page: Page;
  readonly allNavigationButtons: NavigationBarButton[];
  readonly pageUrl = 'https://nordpass.com/';

  constructor(page: Page) {
    this.page = page;
    this.allNavigationButtons = this.getAllNavigationButtons();
  }

  public get quoteButton(): Locator {
    return this.page.getByTestId('get-a-quote-in-header').nth(1);
  }

  public get businessNavButton(): NavigationBarButton {
    return { locator: this.page.getByTestId('header-nav-business'), name: 'Business' };
  }

  public get personalNavButton(): NavigationBarButton {
    return { locator: this.page.getByTestId('header-nav-personal'), name: 'Personal' };
  }

  public get pricingNavButton(): NavigationBarButton {
    return { locator: this.page.getByTestId('header-nav-pricing'), name: 'Pricing' };
  }

  public get solutionsNavButton(): NavigationBarButton {
    return { locator: this.page.getByTestId('header-nav-solutions'), name: 'Solutions' };
  }

  public get resourcesNavButton(): NavigationBarButton {
    return { locator: this.page.getByTestId('header-nav-resources'), name: 'Resources' };
  }

  public get helpNavButton(): NavigationBarButton {
    return { locator: this.page.getByTestId('header-nav-help'), name: 'Help' };
  }

  public get loginNavButton(): NavigationBarButton {
    return { locator: this.page.getByTestId('header-nav-login'), name: 'Login' };
  }

  public get acceptAllCookiesButton(): Locator {
    return this.page.getByTestId('consent-widget-accept-all');
  }

  public get businessPlansButton(): Locator {
    return this.page.getByTestId('for-business-in-hero-homepage-ab');
  }

  public get personalPlansButton(): Locator {
    return this.page.getByTestId('for-personal-in-hero-homepage-ab');
  }

  private getAllNavigationButtons(): NavigationBarButton[] {
    return [
      this.businessNavButton,
      this.personalNavButton,
      this.pricingNavButton,
      this.solutionsNavButton,
      this.resourcesNavButton,
      this.helpNavButton,
      this.loginNavButton,
    ];
  }
}
