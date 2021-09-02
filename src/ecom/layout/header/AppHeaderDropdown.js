import React from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import { freeSet } from '@coreui/icons';
import CIcon from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
import AuthService from "src/ecom/services/AuthService";

const AppHeaderDropdown = () => {
  const navigation = useHistory();
  let fullname = AuthService.getAuthUserFullName();
  const handleLogout = (event) => {
    AuthService.removeAuthUser();
    navigation.push("/login");
  }
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={"avatars/6.jpg"}
            className="c-avatar-img"
            alt="admin@admin.com"
          />
          <span className="c-avatar-status bg-success"></span>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem href="#">
          <div className="logged-user">
            <div className="pt-1 mr-3 float-left">
              <div className="c-avatar">
                <CImg
                  src={"avatars/6.jpg"}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                />
                <span className="c-avatar-status bg-success"></span>
              </div>
            </div>
            <div className="font-weight-bold">
              <span className="fa fa-exclamation text-danger"></span>{fullname}
            </div>
            <div>
              <small className="text-muted mb-0 fw-lighter">Role : </small><small className="mb-0 fst-normal text-uppercase">Administrator</small>
            </div>
            <div>
              <small className="text-muted mb-0 fw-lighter">Last Login : </small><small className="mb-0 fst-normal text-uppercase">02/09/2020 3.00 AM</small>
            </div>
          </div>
        </CDropdownItem>
        {/* <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          Updates
          <CBadge color="info" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
          <CBadge color="warning" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Settings</strong>
        </CDropdownItem> */}
        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        {/* <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Payments
          <CBadge color="secondary" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem> */}
        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Lock Account
        </CDropdownItem>
        <CDropdownItem onClick={handleLogout}>
          <CIcon content={freeSet.cilAccountLogout} className="mfe-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
