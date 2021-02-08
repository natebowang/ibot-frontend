const wrongPasswordFormatMsgGenerator = (passwordValidationResultArray) => {
    switch (true) {
        case passwordValidationResultArray.indexOf('min') > -1:
            // return 'Your password needs 6+ characters. ';
            return '需包含6个以上字符。';
        case passwordValidationResultArray.indexOf('max') > -1:
            // return 'Your password must have no more than 50 characters. ';
            return '需少于50个字符。';
        case passwordValidationResultArray.indexOf('digits') > -1:
            // return 'Your password must have 1+ digit. ';
            return '必须包含至少一个数字。';
        case passwordValidationResultArray.indexOf('symbols') > -1:
            // return 'Your password must have 1+ symbol. ';
            return '必须包含至少一个符号。';
        case passwordValidationResultArray.indexOf('space') > -1:
            // return 'Your password must not have space. ';
            return '不能包含空格。';
        default:
            // return 'Wrong password format. ';
            return '密码格式错误。';
    }
};

export default wrongPasswordFormatMsgGenerator;
