# Generated by Django 3.1.4 on 2020-12-31 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DnDetailModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dn_code', models.CharField(max_length=255, verbose_name='DN Code')),
                ('dn_status', models.IntegerField(default=1, verbose_name='DN Status')),
                ('customer', models.CharField(max_length=255, verbose_name='DN Customer')),
                ('goods_code', models.CharField(max_length=255, verbose_name='Goods Code')),
                ('goods_qty', models.IntegerField(default=0, verbose_name='Goods QTY')),
                ('pick_qty', models.IntegerField(default=0, verbose_name='Goods Pre Pick QTY')),
                ('picked_qty', models.IntegerField(default=0, verbose_name='Goods Picked QTY')),
                ('intransit_qty', models.IntegerField(default=0, verbose_name='Intransit QTY')),
                ('delivery_actual_qty', models.IntegerField(default=0, verbose_name='Delivery Actual QTY')),
                ('delivery_shortage_qty', models.IntegerField(default=0, verbose_name='Delivery Shortage QTY')),
                ('delivery_more_qty', models.IntegerField(default=0, verbose_name='Delivery More QTY')),
                ('delivery_damage_qty', models.IntegerField(default=0, verbose_name='Delivery More QTY')),
                ('goods_weight', models.FloatField(default=0, verbose_name='Goods Weight')),
                ('goods_volume', models.FloatField(default=0, verbose_name='Goods Volume')),
                ('creater', models.CharField(max_length=11, verbose_name='Who Created')),
                ('back_order_label', models.BooleanField(default=False, verbose_name='Back Order Label')),
                ('openid', models.CharField(max_length=255, verbose_name='Openid')),
                ('is_delete', models.BooleanField(default=False, verbose_name='Delete Label')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='Create Time')),
                ('update_time', models.DateTimeField(auto_now=True, null=True, verbose_name='Update Time')),
            ],
            options={
                'verbose_name': 'data id',
                'verbose_name_plural': 'data id',
                'db_table': 'dndetail',
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='DnListModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dn_code', models.CharField(max_length=255, verbose_name='DN Code')),
                ('dn_status', models.IntegerField(default=1, verbose_name='DN Status')),
                ('total_weight', models.FloatField(default=0, verbose_name='Total Weight')),
                ('total_volume', models.FloatField(default=0, verbose_name='Total Volume')),
                ('customer', models.CharField(max_length=255, verbose_name='DN Customer')),
                ('creater', models.CharField(max_length=255, verbose_name='Who Created')),
                ('back_order_label', models.BooleanField(default=False, verbose_name='Back Order Label')),
                ('openid', models.CharField(max_length=255, verbose_name='Openid')),
                ('transportation_fee', models.JSONField(default=dict, verbose_name='Transportation Fee')),
                ('is_delete', models.BooleanField(default=False, verbose_name='Delete Label')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='Create Time')),
                ('update_time', models.DateTimeField(auto_now=True, null=True, verbose_name='Update Time')),
            ],
            options={
                'verbose_name': 'data id',
                'verbose_name_plural': 'data id',
                'db_table': 'dnlist',
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='PickingListModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dn_code', models.CharField(max_length=255, verbose_name='DN Code')),
                ('bin_name', models.CharField(max_length=255, verbose_name='Bin Name')),
                ('goods_code', models.CharField(max_length=255, verbose_name='Goods Code')),
                ('pick_qty', models.IntegerField(default=0, verbose_name='Goods Pre Pick QTY')),
                ('picked_qty', models.IntegerField(default=0, verbose_name='Picked QTY')),
                ('creater', models.CharField(max_length=11, verbose_name='Who Created')),
                ('openid', models.CharField(max_length=255, verbose_name='Openid')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='Create Time')),
                ('update_time', models.DateTimeField(auto_now=True, null=True, verbose_name='Update Time')),
            ],
            options={
                'verbose_name': 'data id',
                'verbose_name_plural': 'data id',
                'db_table': 'pickinglist',
                'ordering': ['-id'],
            },
        ),
    ]