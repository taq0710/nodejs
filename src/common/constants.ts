const LIMIT = 10;

enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

enum USER_STATUS {
  ACTIVE,
  BLOCK,
}

enum GENDER {
  MALE,
  FEMALE,
  OTHER,
}

enum ROLE {
  ADMIN,
  USER,
}

enum VALIDATION_TYPE {
  QUERY,
  PARAMS,
  BODY,
  HEADER,
}

export { LIMIT, HTTP_METHOD, USER_STATUS, ROLE, VALIDATION_TYPE, GENDER };
