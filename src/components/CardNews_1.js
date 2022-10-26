import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const CardNews_1 = () => {
  const navigation = useNavigation();
  const list = [
    {
      id: 1,
      img: require('../storages/imgs/list_news/img4.png'),
      title: 'Trường học ngoài đảo',
      hashtag: '#giaoduc #hoancanh #hongheo',
      peopledonate: '17 người đã ủng hộ',
      content1: [
        'Trường tiểu học Việt Hải, xã Việt Hải, đảo Cát Bà, tỉnh Hải Phòng có tổng sĩ số là 24 em học sinh, từ lớp 1 cho đến lớp 5. Đây là con số rất nhỏ bé, thậm chí còn chưa bằng sĩ số một lớp tại trường tiểu học thông thường tại Hà Nội.',
      ],
      imgPost1: require('../storages/imgs/list_news/img4_1.png'),
      content2: [
        'Tại trường tiểu học Việt Hải, các em chưa có cơ hội tiếp xúc với các môn như Tiếng Anh, Tin Học, đó có thể coi là một bất lợi so với các bạn cùng trang lứa nhưng học tập tại những vùng phát triển hơn. Khi tới nơi đây, các em nhỏ đã tỏ ra hết sức thích thú và say mê khi được dạy về tin học và tiếng anh. Các nhà hảo tâm vì thế có thể quyên góp cho các em nhỏ sách vở và quyên góp cho nhà trường các thiết bị như máy chiếu, máy tính,... nhằm nâng cao điều kiện học tập của các em học sinh',
      ],
      imgPost2: require('../storages/imgs/list_news/img4_2.png'),
    },
    {
      id: 2,
      img: require('../storages/imgs/list_news/img5.png'),
      title: 'Tin học với trẻ em vùng cao',
      hashtag: '#giaoduc #hoancanh #hongheo',
      peopledonate: '30 người đã ủng hộ',
      content1: [
        'Hang Kia là một xã đặc biệt khó khăn của hy vọnguyện Mai Châu nằm trong chương trình 135, với dân số trên 95% là đồng bào dân tộc Mông; tỷ lệ người dân xã Hang Kia không biết nói tiếng phổ thông chiếm gần 60%. Từ trung tâm xã đến điểm trường Tiểu học và Trung học cơ sở Hang Kia B phải mất gần một tiếng đồng hồ di chuyển.',
      ],
      imgPost1: require('../storages/imgs/list_news/img5_1.png'),
      content2: [
        'Tại điểm trường này, trước đây tình trạng học sinh bỏ học rất nhiều đối nhiều, trong đó có thời điểm bậc Tiểu học tỷ lệ bỏ học gần 40%, Trung học cơ sở lên đến 66%; tuy đã được đầu tư cơ sở vật chất khang trang, nhưng nhà trường vẫn thiếu thốn về nhiều mặt như: bàn ghế, giáo viên và học sinh; thiếu thiết bị dạy học và thư viện. Đây là một điểm từ thiện mà các nhà hảo tâm nên chú tâm, nhằm khích lệ tinh thần để các em học sinh có thể trở lại trường học.',
      ],
      imgPost2: require('../storages/imgs/list_news/img5_2.png'),
    },
    {
      id: 3,
      img: require('../storages/imgs/list_news/img6.png'),
      title: 'Một ngày đặc biệt',
      hashtag: '#giaoduc #hoancanh #hongheo',
      peopledonate: '11 người đã ủng hộ',
      content1: [
        'Xã Đa Quyn là một trong những xã nghèo nhất thuộc huyện Đức Trọng, tỉnh Lâm Đồng. Nằm ở vị trí địa lý hẻo lánh, dân cư thưa thớt, điều kiện sinh hoạt còn vô vàn thiếu thốn và khó khăn và các học sinh ở đây cũng hiếm có cơ hội tiếp xúc với công nghệ.',
      ],
      imgPost1: require('../storages/imgs/list_news/img6_1.png'),
      content2: [
        'Nhận thấy được sự khó khăn trong việc tiếp cận và được học về công nghệ của các em nhỏ nơi đây, khi tới để làm từ thiện, chúng tôi đã lên kế hoạch thực hiện một lớp học tin học miễn phí dành cho các em. Chúng tôi thấy được niềm đam mê và sự thích thú của các em trong học tập, vì thế, các nhà hảo tâm có thể đến nơi đây, gặp gỡ trực tiếp và trò chuyện các em nhỏ để hiểu hơn về hoàn cảnh khó khăn của các em',
      ],
      imgPost2: require('../storages/imgs/list_news/img6_2.png'),
    },
    {
      id: 4,
      img: require('../storages/imgs/list_news/img7.png'),
      title: 'Niềm hứng thú mới',
      hashtag: '#giaoduc #hoancanh #hongheo',
      peopledonate: '03 người đã ủng hộ',
      content1: [
        'Cách trung tâm thành phố khoảng 5km đường biển, Đảo Bích Đầm thuộc về một xã đảo xa nhất của thành phố Nha Trang. Đây là nơi cư trú của 174 hộ gia đình với khoảng gần 1000 người, nghề chính của họ chủ yếu dựa vào biển cả như: đánh bắt, nuôi trồng thủy sản.',
      ],
      imgPost1: require('../storages/imgs/list_news/img7_1.png'),
      content2: [
        'Đặt chân đến đây, chúng tôi cảm nhận được vẻ đẹp hoang sơ của thiên nhiên cùng nét chất phác của con người. Chính vì vậy điều kiện sống của người dân vẫn còn khá thô sơ. Điện lưới vẫn chưa về với bà con, các em học sinh chỉ có 1 trường học duy nhất. Đến cấp trung học thì phải di chuyển vào thành phố để học.\n \n',
        'Chúng tôi cảm nhận được sự hứng thú, tò mò của các em nhỏ khi tiếp xúc với máy tính và hy vọng nhiều nhà hảo tâm sẽ làm nhen lên ngọn lửa đam mê này của các em',
      ],
      imgPost2: require('../storages/imgs/list_news/img7_2.png'),
    },
  ];
  return list.map((data, index) => {
    return (
      <View style={{ marginTop: 17 }} key={data.id}>
        <View style={styles.resultBox}>
          <TouchableOpacity
            onPress={() =>
              navigation.push('Detail', {
                title: data.title,
                hashtag: data.hashtag,
                peopledonate: data.peopledonate,
                content1: data.content1,
                imgPost1: data.imgPost1,
                content2: data.content2,
                imgPost2: data.imgPost2,
              })
            }
          >
            <Image style={styles.resultImage} source={data.img} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.push('Detail', {
                title: data.title,
                hashtag: data.hashtag,
                peopledonate: data.peopledonate,
                content1: data.content1,
                imgPost1: data.imgPost1,
                content2: data.content2,
                imgPost2: data.imgPost2,
              })
            }
          >
            <View style={styles.resultTextBox}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.resultText}>{data.title}</Text>
                <View style={{ marginLeft: 10 }}>
                  <FontAwesome name="bookmark-o" size={28} color="#6200EE" />
                </View>
              </View>

              <View style={{ marginLeft: 15 }}>
                <View style={{ marginTop: 30 }}>
                  <Text style={{ fontSize: 12, color: '#888C94' }}>
                    {data.hashtag}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <Text style={{ fontSize: 12, color: '#888C94' }}>
                    {data.peopledonate}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  });
};
const styles = StyleSheet.create({
  resultBox: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  resultImage: {
    height: 118,
    width: 118,
    borderRadius: 10,
  },
  resultTextBox: {
    width: '92%',
    backgroundColor: '#EBE5F7',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 10,
    height: 118,
  },
  resultText: {
    marginLeft: 15,
    width: '75%',
    fontSize: 16,
    flexWrap: 'wrap',
    color: '#431586',
    fontWeight: '600',
  },
});

export default CardNews_1;
