import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const OrderForm = () => {
  return (
    <>
      <CForm action="" method="post">
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>Modify Order</CCardHeader>
              <CCardBody>
                <div className="form-horizontal">
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="hf-email">Email</CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <CInput
                        type="email"
                        id="hf-email"
                        name="hf-email"
                        placeholder="Enter Email..."
                        autoComplete="email"
                      />
                      <CFormText className="help-block">
                        Please enter your email
                      </CFormText>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="2">
                      <CLabel htmlFor="hf-password">Password</CLabel>
                    </CCol>
                    <CCol xs="12" md="8">
                      <CInput
                        type="password"
                        id="hf-password"
                        name="hf-password"
                        placeholder="Enter Password..."
                        autoComplete="current-password"
                      />
                      <CFormText className="help-block">
                        Please enter your password
                      </CFormText>
                    </CCol>
                  </CFormGroup>
                </div>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary">
                  <CIcon name="cil-scrubber" /> Submit
                </CButton>{" "}
                <CButton type="reset" size="sm" color="danger">
                  <CIcon name="cil-ban" /> Reset
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CForm>
    </>
  );
};

export default OrderForm;
