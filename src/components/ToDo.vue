<template>
  <div class="content">
    <div class="boader">
      <!-- <div class="folder">
        <img
          src="../assets/images/folder.png"
          class="folderImage"
          width="400"
          height="512"
        />
      </div> -->
      <div class="boaderHeader">To Do List</div>
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
        <div class="input">
          <input
            type="text"
            class="boaderMainContentAdd"
            placeholder="Add a new task"
          />
        </div>
      </div>
      <div class="boaderFooter">
        <div class="boaderFooterText">1/3 left</div>
        <div class="boaderFooterOptions">
          <label class="boaderFooterOptionsForm">
            <input type="radio" name="radio" class="boaderFooterOptionsFormRadio" checked />
            <span class="boaderFooterOptionsFormLabel">All</span>
          </label>
          <label class="boaderFooterOptionsForm">
            <input type="radio" name="radio" class="boaderFooterOptionsFormRadio" />
            <span class="boaderFooterOptionsFormLabel">Active</span>
          </label>
          <label class="boaderFooterOptionsForm">
            <input type="radio" name="radio" class="boaderFooterOptionsFormRadio" />
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
  height: 100vh;
  background: linear-gradient(104.11deg, #ff7e5f 14.52%, #feb567 87.26%);
  .boader {
    position: relative;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 33.75rem;
    background-color: $boaderWhite;
    border: 0.0625rem solid $lightOrange;
    box-sizing: border-box;
    box-shadow: 0 0.5rem 2.1rem 0.3rem $boaderOrange;
    // .folder {
    //   position: absolute;
    //   z-index: 1;
    //   right: -15rem;
    //   top: -4rem;
    //   max-width: 25rem;
    //   max-height: 32rem;
    //   padding: 0 3.5rem;
    //   img {
    //     width:100%;
    //     height: 100%;
    //   }
    // }
    .boaderHeader {
      text-align: center;
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 1.75rem;
      color: $brown;
      background: $lightOrange;
      padding: 1rem 0;
    }
    .boaderMain {
      padding: 2rem;
      &Content {
        margin: 0 0 1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background: $whiteOrange;
        border-radius: 0.75rem;

        &Info {
          &Text {
            font-family: "Inter";
            font-size: 1.25rem;
            line-height: 1.75rem;
            color: $brown;
          }
          &Form {
            display: flex;
            gap: 1.3rem;
            align-items: center;
            &Checkbox {
              width: 1.4rem;
              height: 1.4rem;
              display: none;
            }
            &CheckboxHidden {
              width: 1.4rem;
              height: 1.4rem;
              border: 0.0625rem solid $orange;
              border-radius: 0.35rem;
              position: relative;
              cursor: pointer;
            }
            &CheckboxHidden::before {
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
        &Button {
          width: 1.4rem;
          height: 1.4rem;
          border: 0.0625rem solid $lightOrange;
          border-radius: 0.35rem;
          color: $lightOrange;
          text-align: center;
          background: $whiteOrange;
          cursor: pointer;
        }
        &Button::before {
          content: "\2716";
          display: flex;
          justify-content: center;
          align-items: center;
        }
        &Button:focus {
          color: $orange;
          border: 0.0625rem solid $orange;
        }
      }
      &ContentAdd {
        width: 100%;
        padding: 1rem;
        background: $addWhite;
        border: 0.0625rem dashed $lightOrange;
        box-sizing: border-box;
        border-radius: 0.7rem;
        text-align: center;
        font-family: "Inter";
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: $brown;
      }
      &ContentAdd::placeholder {
        color: $lightOrange;
      }
      &ContentAdd:focus {
        outline: 0;
        border: none;
        background: $whiteOrange;
        border-radius: 0.75rem;
      }
    }
    .boaderFooter {
      display: flex;
      padding: 0.74rem 1.85rem;
      justify-content: space-between;
      align-items: center;
      background: $lightOrange;
      &Text {
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: $brownRGBA;
      }
      &Options {
        display: flex;
        gap: 1rem;
        &Form {
          &Radio {
            width: 1rem;
            height: 1rem;
            display: none;
          }
          &Label {
            font-weight: 600;
            font-size: 1.25rem;
            line-height: 1.75rem;
            color: $brownRGBA;
            border: none;
            border-radius: 0.35rem;
            padding: 0.35rem;
            cursor: pointer;
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
