FROM alpine
LABEL AUTHOR="none" \
        VERSION=0.1.3

ENV DEFAULT_LIST_FILE=crontab_list.sh \
        CUSTOM_LIST_MERGE_TYPE=append \
        REPO_URL=https://github.com/vonxing/jd_docker.git

RUN set -ex \
        && apk update && apk upgrade\
        && apk add --no-cache tzdata  git  nodejs  moreutils  npm curl jq \
        && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
        && echo "Asia/Shanghai" > /etc/timezone

RUN git clone ${REPO_URL} /scripts \
        && cd /scripts \
        && git checkout master \
        && mkdir logs \
        && npm install

COPY docker_entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/docker_entrypoint.sh

COPY default_task.sh /scripts/docker/

RUN chmod +x /scripts/docker/default_task.sh

COPY proc_file.sh /scripts/docker/
RUN chmod +x /scripts/docker/proc_file.sh

COPY jdCookie.js /scripts/
RUN chmod +x /scripts/jdCookie.js
COPY USER_AGENTS.js /scripts/
RUN chmod +x /scripts/USER_AGENTS.js
WORKDIR /scripts

ENTRYPOINT ["docker_entrypoint.sh"]

CMD [ "crond" ]
