import { element, by, ElementFinder } from 'protractor';

export class InvoiceComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-invoice div table .btn-danger'));
  title = element.all(by.css('jhi-invoice div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class InvoiceUpdatePage {
  pageTitle = element(by.id('jhi-invoice-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  idInput = element(by.id('field_id'));
  dateInput = element(by.id('field_date'));
  detailsInput = element(by.id('field_details'));
  statusSelect = element(by.id('field_status'));
  paymentMethodSelect = element(by.id('field_paymentMethod'));
  paymentDateInput = element(by.id('field_paymentDate'));
  paymentAmountInput = element(by.id('field_paymentAmount'));

  orderSelect = element(by.id('field_order'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setIdInput(id: string): Promise<void> {
    await this.idInput.sendKeys(id);
  }

  async getIdInput(): Promise<string> {
    return await this.idInput.getAttribute('value');
  }

  async setDateInput(date: string): Promise<void> {
    await this.dateInput.sendKeys(date);
  }

  async getDateInput(): Promise<string> {
    return await this.dateInput.getAttribute('value');
  }

  async setDetailsInput(details: string): Promise<void> {
    await this.detailsInput.sendKeys(details);
  }

  async getDetailsInput(): Promise<string> {
    return await this.detailsInput.getAttribute('value');
  }

  async setStatusSelect(status: string): Promise<void> {
    await this.statusSelect.sendKeys(status);
  }

  async getStatusSelect(): Promise<string> {
    return await this.statusSelect.element(by.css('option:checked')).getText();
  }

  async statusSelectLastOption(): Promise<void> {
    await this.statusSelect.all(by.tagName('option')).last().click();
  }

  async setPaymentMethodSelect(paymentMethod: string): Promise<void> {
    await this.paymentMethodSelect.sendKeys(paymentMethod);
  }

  async getPaymentMethodSelect(): Promise<string> {
    return await this.paymentMethodSelect.element(by.css('option:checked')).getText();
  }

  async paymentMethodSelectLastOption(): Promise<void> {
    await this.paymentMethodSelect.all(by.tagName('option')).last().click();
  }

  async setPaymentDateInput(paymentDate: string): Promise<void> {
    await this.paymentDateInput.sendKeys(paymentDate);
  }

  async getPaymentDateInput(): Promise<string> {
    return await this.paymentDateInput.getAttribute('value');
  }

  async setPaymentAmountInput(paymentAmount: string): Promise<void> {
    await this.paymentAmountInput.sendKeys(paymentAmount);
  }

  async getPaymentAmountInput(): Promise<string> {
    return await this.paymentAmountInput.getAttribute('value');
  }

  async orderSelectLastOption(): Promise<void> {
    await this.orderSelect.all(by.tagName('option')).last().click();
  }

  async orderSelectOption(option: string): Promise<void> {
    await this.orderSelect.sendKeys(option);
  }

  getOrderSelect(): ElementFinder {
    return this.orderSelect;
  }

  async getOrderSelectedOption(): Promise<string> {
    return await this.orderSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class InvoiceDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-invoice-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-invoice'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
