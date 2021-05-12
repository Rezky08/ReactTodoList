import React from "react";
import { ReactComponent as ElipsisIcon } from "./Icons/Ellipsis.svg";
import { ReactComponent as ArrowRightIcon } from "./Icons/ArrowRight.svg";
import { ReactComponent as ArrowLeftIcon } from "./Icons/ArrowLeft.svg";
import { ReactComponent as EditIcon } from "./Icons/Edit.svg";
import { ReactComponent as DeleteIcon } from "./Icons/Delete.svg";
import {
  MenuPopup as MenuPopUpComponent,
  MenuPopupItem as MenuPopUpItemComponent,
} from "./MenuPopUp";

function groupTaskOptions() {
  return (
    <MenuPopUpComponent>
      <MenuPopUpComponent.PopupTrigger>
        <ElipsisIcon />
      </MenuPopUpComponent.PopupTrigger>

      <MenuPopUpComponent.PopupContent>
        <MenuPopUpItemComponent>
          <MenuPopUpItemComponent.PopupMenuItemIcon>
            <ArrowLeftIcon />
          </MenuPopUpItemComponent.PopupMenuItemIcon>
          <MenuPopUpItemComponent.PopupMenuItemTitle>
            Move Left
          </MenuPopUpItemComponent.PopupMenuItemTitle>
        </MenuPopUpItemComponent>

        <MenuPopUpItemComponent>
          <MenuPopUpItemComponent.PopupMenuItemIcon>
            <ArrowRightIcon />
          </MenuPopUpItemComponent.PopupMenuItemIcon>
          <MenuPopUpItemComponent.PopupMenuItemTitle>
            Move Right
          </MenuPopUpItemComponent.PopupMenuItemTitle>
        </MenuPopUpItemComponent>

        <MenuPopUpItemComponent>
          <MenuPopUpItemComponent.PopupMenuItemIcon>
            <EditIcon />
          </MenuPopUpItemComponent.PopupMenuItemIcon>
          <MenuPopUpItemComponent.PopupMenuItemTitle>
            Edit
          </MenuPopUpItemComponent.PopupMenuItemTitle>
        </MenuPopUpItemComponent>

        <MenuPopUpItemComponent>
          <MenuPopUpItemComponent.PopupMenuItemIcon>
            <DeleteIcon />
          </MenuPopUpItemComponent.PopupMenuItemIcon>
          <MenuPopUpItemComponent.PopupMenuItemTitle>
            Delete
          </MenuPopUpItemComponent.PopupMenuItemTitle>
        </MenuPopUpItemComponent>
      </MenuPopUpComponent.PopupContent>
    </MenuPopUpComponent>
  );
}

export default groupTaskOptions;
