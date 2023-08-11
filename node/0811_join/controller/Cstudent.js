const { Student, StudentProfile, Classes } = require("../models/");

exports.main = (req, res) => {
  res.render("index");
};

// include: 쿼리를 실행할 때 관련된 모델의 데어터도 함께 조회할 수 있도록 하는 옵션
exports.post_student = async (req, res) => {
  try {
    const { userid, password, email, name, major } = req.body;
    const user = await Student.create(
      {
        userid,
        password,
        email,
        // 모델명: StudentProfile
        studentProfile: {
          name,
          major,
        },
      },
      {
        include: StudentProfile,
        // [{ model: StudentProfile }] 과 같음 require로 가져온거.
      }
    );
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

exports.post_class = async (req, res) => {
  try {
    const { name, room, code, teacher_name, studentId } = req.body;
    const classes = await Classes.create({
      name,
      room,
      code,
      teacher_name,
      studentId,
    });
    res.send(classes);
  } catch (error) {
    console.log(error);
  }
};

exports.get_student = async (req, res) => {
  try {
    const student = await Student.findAll({
      attributes: ["id", "userid", "email"],
      include: [
        {
          model: StudentProfile,
          attributes: ["name", "major"],
        },
      ],
    });
    res.send(student);
  } catch (error) {
    console.log(error);
  }
};
