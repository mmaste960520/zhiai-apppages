
const isDual = {
  'smokingOrNot': {
    '是': '吸烟',
    '否': '不吸烟'
  },
  'dringkingOrNot': {
    '是': '饮酒',
    '否': '不饮酒'
  },
  'hasChild': {
    '是': '有孩子',
    '否': '没孩子'
  },
  'hasPhoto': {
    '有': '有照片',
    '无': '没有照片'
  },
  'hasTogether': {
    '是': '和子女在一起',
    '否': '不和子女在一起'
  },
  'childOrNot': {
    '是': '想要孩子',
    '否': '不想要孩子',
    '视情况而定': '视情况而定',
    '不介意': '不介意'
  }
}

const spouseData = {
  /** 后端传入数据需进行非空和文字‘不限’两次判断 */
  dualSelect: {
    keysData: [
      'liveCity',
      'chZodiac',
      'userBlood',
      'userBirthday',
      'userWeight',
      'userShape',
      'maleFeminist',
      'childState',
      'userMonthIncome'
    ],
    func: (data) => {
      if (data !== '' && data !== '不限') {
        return data
      }
    }
  },
  // 数据只需进行非空判断
  notNull: {
    keysData: [
      'userShape',
      'profession',
      'businessTrip',
      'social',
      'workRest',
      'dietaryHabit',
      'buyHouseState',
      'buyCarState',
      'marriageOrNot'
    ],
    func: (data) => {
      if (data !== '' && data !== '不限') {
        return data
      }
    }
  },
  // 身高特殊数据进行处理
  special: {
    keysData: [
      'userHeight'
    ],
    func: (data) => {
      if (data !== '' && data !== '不限') {
        let str = data.replace(/,/gi, '-')
        return `${str} CM`
      }
    }
  },
  // 身高特殊数据进行处理
  userAge: {
    keysData: [
      'userAge'
    ],
    func: (data) => {
      if (data !== '' && data !== '-1' && data !== '不限') {
        let str = data.replace(/,/gi, '-')
        return `${str} 岁`
      }
    }
  },
  // 宠物特殊数据进行处理
  pet: {
    keysData: [
      'pet'
    ],
    func: (data) => {
      if (data !== '' && data !== '不限' && data !== '不限') {
        let str = data.replace(/,/gi, ' ')
        return `饲养宠物: ${str}`
      }
    }
  },
  // 学历,星座，婚姻状况，性格特殊数据进行处理
  userEducation: {
    keysData: [
      'userEducation',
      'natureType',
      'userZodiac',
      'userMarriage'
    ],
    func: (data) => {
      if (data !== '' && data !== '不限') {
        let str = data.replace(/,/gi, ' ')
        return `${str}`
      }
    }
  },
  // 是否抽烟，喝酒，有无子女特殊数据进行处理
  isDual: {
    keysData: [
      'smokingOrNot',
      'dringkingOrNot',
      'hasChild',
      'hasPhoto',
      'hasTogether'
    ],
    func: (data, keys) => {
      if (data !== '' && data !== '不限') {
        return isDual[keys][data]
      }
    }
  },
  // 过敏原数据进行处理
  userAllergen: {
    keysData: [
      'userAllergen'
    ],
    func: (data, keys) => {
      if (data !== '' && data !== '不限') {
        return `过敏源： ${data}`
      }
    }
  },
  // 是否想要孩子数据进行处理
  childNum: {
    keysData: [
      'childNum'
    ],
    func: (data, keys) => {
      if (data !== '' && data !== '不限') {
        return `子女个数： ${data}`
      }
    }
  }
}

const personData = (data) => {
  let text = []
  Object.keys(data).map(key => {
    return Object.keys(spouseData).map(spouse => {
      if (spouseData[spouse].keysData.includes(key)) {
        if (spouseData[spouse].func(data[key], key)) {
          text.push(spouseData[spouse].func(data[key], key))
        }
      }
    })
  })
  return text
}

export {
  personData
}
