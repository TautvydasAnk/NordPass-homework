import { HeaderNavigationItemNames } from '../../enums/NavigationItemEnums';
import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';

interface NavigationBarButton {
  locator: Locator;
  name: string;
}

export class LandingPage extends BasePage {
  readonly allDropdownNavigationButtons: NavigationBarButton[];
  readonly allStaticNavigationButtons: NavigationBarButton[];

  constructor(page: Page) {
    super(page, '');
    this.allDropdownNavigationButtons = this.getDropdownNavigationButtons();
    this.allStaticNavigationButtons = this.getStaticNavigationButtons();
  }

  public get quoteButton(): Locator {
    return this.page.getByTestId('get-a-quote-in-header').nth(1);
  }

  public get businessNavButton(): Locator {
    return this.page.getByTestId('header-nav-business');
  }

  public get personalNavButton(): Locator {
    return this.page.getByTestId('header-nav-personal');
  }

  public get pricingNavButton(): Locator {
    return this.page.getByTestId('header-nav-pricing');
  }

  public get solutionsNavButton(): Locator {
    return this.page.getByTestId('header-nav-solutions');
  }

  public get resourcesNavButton(): Locator {
    return this.page.getByTestId('header-nav-resources');
  }

  public get helpNavButton(): Locator {
    return this.page.getByTestId('header-nav-help');
  }

  public get loginNavButton(): Locator {
    return this.page.getByTestId('header-nav-login');
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

  private getDropdownNavigationButtons(): NavigationBarButton[] {
    return [
      { locator: this.businessNavButton, name: HeaderNavigationItemNames.BUSINESS },
      { locator: this.personalNavButton, name: HeaderNavigationItemNames.PERSONAL },
      { locator: this.solutionsNavButton, name: HeaderNavigationItemNames.SOLUTIONS },
      { locator: this.resourcesNavButton, name: HeaderNavigationItemNames.RESOURCES },
      { locator: this.loginNavButton, name: HeaderNavigationItemNames.LOGIN },
    ];
  }

  private getStaticNavigationButtons(): NavigationBarButton[] {
    return [
      { locator: this.pricingNavButton, name: HeaderNavigationItemNames.PRICING },
      { locator: this.helpNavButton, name: HeaderNavigationItemNames.HELP },
    ];
  }
}
