<template>
  <div class="content">
    <div class="folder">
      <img src="../assets/images/folder.png" class="folderImage" />
    </div>
    <div class="boader">
      <div class="boaderHeader">to do list</div>
      <div class="boaderMain">
        <div class="boaderMainContent">
          <div class="boaderMainContentInfo">
            <label class="boaderMainContentInfoForm">
              <input
                type="checkbox"
                class="boaderMainContentInfoFormCheckbox"
              />
              <span class="boaderMainContentInfoFormCheckboxHidden"></span>
              <span class="boaderMainContentInfoText">Task 1</span>
            </label>
          </div>
          <button class="boaderMainContentButton"></button>
        </div>
        <div class="boaderMainContent">
          <div class="boaderMainContentInfo">
            <label class="boaderMainContentInfoForm">
              <input
                type="checkbox"
                class="boaderMainContentInfoFormCheckbox"
              />
              <span class="boaderMainContentInfoFormCheckboxHidden"></span>
              <span class="boaderMainContentInfoText">Task 2</span>
            </label>
          </div>
          <button class="boaderMainContentButton"></button>
        </div>
        <div class="boaderMainContent">
          <div class="boaderMainContentInfo">
            <label class="boaderMainContentInfoForm">
              <input
                type="checkbox"
                class="boaderMainContentInfoFormCheckbox"
              />
              <span class="boaderMainContentInfoFormCheckboxHidden"></span>
              <span class="boaderMainContentInfoText">Task 3</span>
            </label>
          </div>
          <button class="boaderMainContentButton"></button>
        </div>
        <div class="boaderMainContentAdd">Add a new task</div>
      </div>
      <div class="boaderFooter">
        <div class="boaderFooterText">1/3 left</div>
        <div class="boaderFooterOptions">
          <label class="boaderFooterOptionsForm">
            <input type="radio" class="boaderFooterOptionsFormRadio" checked />
            <span class="boaderFooterOptionsFormLabel">All</span>
          </label>
          <label class="boaderFooterOptionsForm">
            <input type="radio" class="boaderFooterOptionsFormRadio" />
            <span class="boaderFooterOptionsFormLabel">Active</span>
          </label>
          <label class="boaderFooterOptionsForm">
            <input type="radio" class="boaderFooterOptionsFormRadio" />
            <span class="boaderFooterOptionsFormLabel">Completed</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/style.scss";
.content {
  position: relative;
  z-index: 0;
  max-width: 74rem;
  height: 40rem;
  background: linear-gradient(104.11deg, #ff7e5f 14.52%, #feb567 87.26%);
  margin: 0 auto;
  .folder {
    &Image {
      position: absolute;
      left: 37.5rem;
      top: 4rem;
      z-index: 1;
      max-width: 25rem;
      max-height: 32rem;
      padding: 0 3.5rem;
    }
  }
  .boader {
    position: relative;
    z-index: 2;
    max-width: 33.75rem;
    left: 20rem;
    top: 6.15rem;
    background: #fff4e9;
    border: 0.0625rem solid $lightOrange;
    box-sizing: border-box;
    box-shadow: 0 0.5rem 2.1rem 0.3rem #fe9262;
    &Header {
      text-align: center;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: $brown;
      background: $lightOrange;
    }
    &Main {
      &Content {
        margin: 1.85rem 1.85rem 0.925rem 1.85rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background: $whiteOrange;
        border-radius: 0.75rem;
        .boaderMainContentInfo {
          &Text {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 1.75rem;
            color: $brown;
          }
          &Form {
            display: flex;
            gap: 1.3rem;
            align-items: center;
            .boaderMainContentInfoFormCheckbox {
              width: 1.4rem;
              height: 1.4rem;
              display: none;
            }
            .boaderMainContentInfoFormCheckboxHidden {
              width: 1.4rem;
              height: 1.4rem;
              border: 0.0625rem solid $orange;
              border-radius: 0.35rem;
              position: relative;
            }
            .boaderMainContentInfoFormCheckboxHidden::before {
              content: "\2713";
              display: flex;
              justify-content: center;
              align-items: center;
              width: 1.5rem;
              height: 1.5rem;
              color: $white;
              position: absolute;
              left: -0.05rem;
              top: -0.05rem;
              border-radius: 0.35rem;
              opacity: 0;
              transition: 0.5s;
            }
            .boaderMainContentInfoFormCheckbox:checked
              + .boaderMainContentInfoFormCheckboxHidden::before {
              opacity: 1;
              background: $orange;
            }
          }
        }
        .boaderMainContentButton {
          width: 1.4rem;
          height: 1.4rem;
          border: 0.0625rem solid $lightOrange;
          border-radius: 0.35rem;
          color: $lightOrange;
          text-align: center;
          background: $whiteOrange;
        }
        .boaderMainContentButton::before {
          content: "\2716";
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .boaderMainContentButton:focus {
          color: $orange;
          border: 0.0625rem solid $orange;
        }
      }
      .boaderMainContentAdd {
        margin: 1.85rem;
        padding: 1rem;
        background: #ffecd8;
        border: 0.0625rem dashed $lightOrange;
        box-sizing: border-box;
        border-radius: 10px;
        text-align: center;
        font-family: "Inter";
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: $lightOrange;
      }
    }
    .boaderFooter {
      display: flex;
      padding: 0.74rem 1.85rem;
      justify-content: space-between;
      align-items: center;
      background: $lightOrange;
      &Text {
        font-family: "Open Sans";
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: $brownRGBA;
      }
      .boaderFooterOptions {
        display: flex;
        gap: 1rem;
        .boaderFooterOptionsForm {
          .boaderFooterOptionsFormRadio {
            width: 1rem;
            height: 1rem;
            display: none;
          }
          .boaderFooterOptionsFormLabel {
            font-family: "Open Sans";
            font-weight: 600;
            font-size: 1.25rem;
            line-height: 1.75rem;
            color: $brownRGBA;
            border: none;
            border-radius: 0.35rem;
            padding: 0.35rem;
          }
          .boaderFooterOptionsFormRadio:checked
            ~ .boaderFooterOptionsFormLabel {
            border: 0.0625rem solid $brownRGBA;
          }
        }
      }
    }
  }
}
</style>
