import { TestBed } from '@angular/core/testing';

import { RomanService } from './roman.service';

describe('RomanService', () => {

  let service: RomanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(RomanService);
  });

  // Units

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Roman 1', () => {
    expect(service.romanU(1)).toEqual('I');
  });

  it('Roman 2', () => {
    expect(service.romanU(2)).toEqual('II');
  });

  it('Roman 3', () => {
    expect(service.romanU(3)).toEqual('III');
  });

  it('Roman 4', () => {
    expect(service.romanU(4)).toEqual('IV');
  });

  it('Roman 5', () => {
    expect(service.romanU(5)).toEqual('V');
  });

  it('Roman 6', () => {
    expect(service.romanU(6)).toEqual('VI');
  });

  it('Roman 7', () => {
    expect(service.romanU(7)).toEqual('VII');
  });

  it('Roman 8', () => {
    expect(service.romanU(8)).toEqual('VIII');
  });

  it('Roman 9', () => {
    expect(service.romanU(9)).toEqual('IX');
  });

  // Tens

  it('Roman 10', () => {
    expect(service.romanT(1)).toEqual('X');
  });

  it('Roman 20', () => {
    expect(service.romanT(2)).toEqual('XX');
  });

  it('Roman 30', () => {
    expect(service.romanT(3)).toEqual('XXX');
  });

  it('Roman 40', () => {
    expect(service.romanT(4)).toEqual('XL');
  });

  it('Roman 50', () => {
    expect(service.romanT(5)).toEqual('L');
  });

  it('Roman 60', () => {
    expect(service.romanT(6)).toEqual('LX');
  });

  it('Roman 70', () => {
    expect(service.romanT(7)).toEqual('LXX');
  });

  it('Roman 80', () => {
    expect(service.romanT(8)).toEqual('LXXX');
  });

  it('Roman 90', () => {
    expect(service.romanT(9)).toEqual('XC');
  });

  // Hundreds

  it('Roman 100', () => {
    expect(service.romanH(1)).toEqual('C');
  });

  it('Roman 200', () => {
    expect(service.romanH(2)).toEqual('CC');
  });

  it('Roman 300', () => {
    expect(service.romanH(3)).toEqual('CCC');
  });

  it('Roman 400', () => {
    expect(service.romanH(4)).toEqual('CD');
  });

  it('Roman 500', () => {
    expect(service.romanH(5)).toEqual('D');
  });

  it('Roman 600', () => {
    expect(service.romanH(6)).toEqual('DC');
  });

  it('Roman 700', () => {
    expect(service.romanH(7)).toEqual('DCC');
  });

  it('Roman 800', () => {
    expect(service.romanH(8)).toEqual('DCCC');
  });

  it('Roman 900', () => {
    expect(service.romanH(9)).toEqual('CM');
  });

  // 1000

  it('Roman 1000', () => {
    expect(service.romanH(10)).toEqual('M');
  });

});
