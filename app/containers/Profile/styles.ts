import { StyleService } from "@ui-kitten/components";

const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-2"
  },
  contentContainer: {
    paddingVertical: 24,
    backgroundColor: "background-basic-color-2"
  },
  photo: {
    alignSelf: "center",
    width: 320,
    height: 320,
    borderRadius: 16
  },
  photoButton: {
    right: 16,
    top: 32,
    width: 48,
    height: 48,
    borderRadius: 24
  },
  description: {
    padding: 24,
    backgroundColor: "background-basic-color-1"
  },
  setting: {
    padding: 16
  },
  section: {
    marginTop: 24
  },
  doneButton: {
    marginHorizontal: 24,
    marginTop: 24
  }
});

export default themedStyles;
