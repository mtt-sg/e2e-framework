import { Page, Locator } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly pimMenu: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly resultTable: Locator;
  readonly noResultsMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pimMenu = page.locator('a[href*="pim"]');
    this.searchInput = page.locator('input[placeholder="Type for hints..."]');
    this.searchButton = page.locator('button[type="submit"]');
    this.resultTable = page.locator('div.oxd-table');
    this.noResultsMessage = page.locator('span.oxd-text--span');
  }

  async navigateToPim() {
    await this.pimMenu.click();
  }

  async search(query: string) {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  async getResultCount() {
    return await this.resultTable.locator('div.oxd-table-row').count();
  }

  async getNoResultsMessage() {
    return await this.noResultsMessage.textContent();
  }
}
